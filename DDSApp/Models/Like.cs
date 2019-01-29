using DDSApp.Areas.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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