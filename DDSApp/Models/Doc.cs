using System.Collections.Generic;
using DDSApp.Areas.Abstractions;


namespace DDSApp.Models
{
    public class Doc : IEntityBase
    {
        public string Id { get; set; } 
        public string Title { get; set; }
        public string Topic { get; set; }
        public string Category { get; set; }
        public string Url { get; set; }
        public string LastUpdate { get; set; }
    }
}
