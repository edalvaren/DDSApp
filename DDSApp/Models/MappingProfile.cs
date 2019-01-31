using System;
using System.Collections.Generic;
using System.Linq;
using DDSApp.Models.Stories;
using System.Threading.Tasks;
using DDSApp.Models;
using AutoMapper;


namespace DDSApp.Models
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Story, StoryDetailViewModel>()
                .ForMember(s => s.OwnerUsername, map => map.MapFrom(s => s.Owner.Username))
                .ForMember(s => s.LikesNumber, map => map.MapFrom(s => s.Likes.Count))
                .ForMember(s => s.Liked, map => map.Ignore());
            CreateMap<Story, OwnerStoryViewModel>();
            CreateMap<Story, StoryViewModel>()
                .ForMember(s => s.OwnerUsername, map => map.MapFrom(s => s.Owner.Username));
        }
    }
}
