using System.Collections.Generic;

namespace DDSApp.Models
{
    public class UpdateStoryViewModel
    {
        public string Title { get; set; }
        public string Content { get; set; }
        public List<string> Tags { get; set; }
    }
}