using DDSApp.Areas.Abstractions;
using DDSApp.Models;

namespace DDSApp.Areas.Repositories
{
    public class StoryRepository : EntityBaseRepository<Story>, IStoryRepository 
    {
        public StoryRepository (SpiralDocsContext context) : base (context) { }

        public bool IsInvited(string storyId, string userId)
        {
            throw new System.NotImplementedException();
        }

        public bool IsOwner(string storyId, string userId)
        {
            var story = this.GetSingle(s => s.Id == storyId);
            return story.OwnerId == userId;
        }
  }
}