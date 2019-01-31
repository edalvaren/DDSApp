using DDSApp.Areas.Abstractions;

namespace DDSApp.Models
{
    public class Like : IEntityBase 
    {
        public string StoryId { get; set; }
        public Story Story { get; set; }

        public string UserId { get; set; }
        public User User { get; set; }

        public string Id { get; set; }
    }
}