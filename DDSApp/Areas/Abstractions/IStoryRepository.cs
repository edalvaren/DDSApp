using DDSApp.Areas.Repositories;
using DDSApp.Models;


namespace DDSApp.Areas.Abstractions
{
    public interface IStoryRepository: IEntityBaseRepository<Story>
    {
        bool IsOwner(string storyId, string userId);
        bool IsInvited(string storyId, string userId);
    }
}