using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;

namespace DDSApp.Models
{
    public class TripReport
    {
        public int ID { get; set; }
        public string Title { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public DateTime Date { get; set; }
        public Uri Storageurl { get; set; }
        public IFormFile File { get; set; }
    }
}
