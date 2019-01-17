using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DDSApp.Services;
using Microsoft.Extensions.Configuration;
using System;

namespace DDSApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileUploadController : Controller
    {

        private StorageService _storageService; 

        public FileUploadController(IConfiguration config)
        {
            _storageService = new StorageService(config); 
        }

        public IActionResult Index()
        {
            return View();
        }
        /// <summary>
        /// Upload a Document into Azure Blob Storage
        /// </summary>
        /// <param name="files" type=IFormFile></param>
        /// <returns>Response</returns>
        [HttpPost("UploadFiles")]
        public async Task<IActionResult> Post(List<IFormFile> files)
        {
            long size = files.Sum(f => f.Length);
            //full path to file in temp location 
            var filePath = Path.GetTempFileName();
            
            foreach(var formFile in files)
            {
                if(formFile.Length > 0)
                {
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                        var storageStream = formFile.OpenReadStream();
                        await _storageService.UploadFile(storageStream); 
                    }
                }
            }
            return Ok(new { count = files.Count, size, filePath });
        }

   

        private async Task<IActionResult> UploadService(FileStream stream)
        {
            await _storageService.UploadFile(stream);
            return Ok(); 
        }
    }
}