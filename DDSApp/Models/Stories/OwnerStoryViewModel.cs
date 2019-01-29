using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDSApp.Models.Stories
{
    public class OwnerStoryViewModel
    {
        public string Id { get; set; }
        public string Title { get; set; }
        public List<string> Tags { get; set; } = new List<string>();
        public long PublishTime { get; set; }
    }


}
