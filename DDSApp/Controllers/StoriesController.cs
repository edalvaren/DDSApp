using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DDSApp.Areas.Abstractions;
using DDSApp.Models;
using DDSApp.Models.Stories;
using AutoMapper; 

namespace DDSApp.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiController]
    public class StoriesController : ControllerBase
    {
        IStoryRepository storyRepository;
        ILikeRepository likeRepository;
        IUserRepository userRepository;
        IMapper mapper;

        public StoriesController(
            IStoryRepository storyRepository,
            ILikeRepository likeRepository,
            IUserRepository userRepository,
            IMapper mapper
        )
        {
            this.storyRepository = storyRepository;
            this.likeRepository = likeRepository;
            this.userRepository = userRepository;
            this.mapper = mapper;
        }

        [HttpGet()]
        public ActionResult<StoriesViewModel> GetStories()
        {
            var stories = storyRepository.AllIncluding(s => s.Owner);
            return new StoriesViewModel
            {
                Stories = stories.Select(mapper.Map<StoryViewModel>).ToList()
            };
        }

        [HttpGet("{id}")]
        public ActionResult<StoryDetailViewModel> GetStoryDetail(string id)
        {
            var story = storyRepository.GetSingle(s => s.Id == id, s => s.Owner, s => s.Likes);
            var userId = HttpContext.User.Identity.Name;
            var liked = story.Likes.Exists(l => l.UserId == userId);

            return mapper.Map<Story, StoryDetailViewModel>(
                story,
                opt => opt.AfterMap((src, dest) => dest.Liked = liked)
            );
        }

        [HttpPost]
        public ActionResult<StoryCreationViewModel> Post([FromBody]UpdateStoryViewModel model)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var ownerId = HttpContext.User.Identity.Name;
            var creationTime = ((DateTimeOffset)DateTime.UtcNow).ToUnixTimeSeconds();
            var storyId = Guid.NewGuid().ToString();
            var story = new Story
            {
                Id = storyId,
                Title = model.Title,
                Content = model.Content,
                CreationTime = creationTime,
                LastEditTime = creationTime,
                OwnerId = ownerId,
                Draft = true
            };

            storyRepository.Add(story);
            storyRepository.Commit();

            return new StoryCreationViewModel
            {
                StoryId = storyId
            };
        }


        [HttpPost("{id}/publish")]
        public ActionResult Publish(string id)
        {
            var ownerId = HttpContext.User.Identity.Name;
            if (!storyRepository.IsOwner(id, ownerId)) return Forbid("You are not the owner of this story");

            var newStory = storyRepository.GetSingle(s => s.Id == ownerId);
            newStory.Draft = false;
            newStory.PublishTime = ((DateTimeOffset)DateTime.UtcNow).ToUnixTimeSeconds();

            storyRepository.Update(newStory);
            storyRepository.Commit();

            return NoContent();
        }

   
  


        [HttpGet("user/{id}")]
        public ActionResult<OwnerStoriesViewModel> Get(string id)
        {
            var stories = storyRepository.FindBy(story => story.OwnerId == id && !story.Draft);
            return new OwnerStoriesViewModel
            {
                Stories = stories.Select(mapper.Map<OwnerStoryViewModel>).ToList()
            };
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var ownerId = HttpContext.User.Identity.Name;
            if (!storyRepository.IsOwner(id, ownerId)) return Forbid("You are not the owner of this story");

            likeRepository.DeleteWhere(share => share.StoryId == id);
            storyRepository.DeleteWhere(story => story.Id == id);
            storyRepository.Commit();

            return NoContent();
        }

        [HttpPost("{id}/toggleLike")]
        public ActionResult ToggleLike(string id)
        {
            var userId = HttpContext.User.Identity.Name;

            var story = storyRepository.GetSingle(s => s.Id == id, s => s.Likes);
            if (userId == story.OwnerId) return BadRequest("You can't like your own story");

            var user = userRepository.GetSingle(s => s.Id == userId);
            var existingLike = story.Likes.Find(l => l.UserId == userId);
   
            likeRepository.Commit();
            return NoContent();
        }
    }
}