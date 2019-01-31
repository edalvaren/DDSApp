using Microsoft.AspNetCore.Http;
using System;


namespace DDSApp.Models
{
    public class FileUploadModel
    {
        public IFormFile File { get; set; }
        public string Name { get; set; }
        public string Category { get; set; }
        public DateTime Date { get; set; }
    }
}
