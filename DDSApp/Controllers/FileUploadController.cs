using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using DDSApp.Services;
using Microsoft.Extensions.Configuration;
using System;
using DDSApp.Models;
using Microsoft.AspNetCore.Hosting;

namespace DDSApp.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class FileUploadController : Controller
    {
        private string rootPath;
        private IHostingEnvironment env; 
        private StorageService _storageService;
        public FileUploadController(IConfiguration config, IHostingEnvironment environment)
        {
            env = environment; 
            _storageService = new StorageService(config);
            rootPath = environment.WebRootPath; 
        }

        /// <summary>
        /// Upload a Document into Azure Blob Storage
        /// </summary>
        /// <param name="files" type=IFormFile></param>
        /// <returns>Response</returns>
        [HttpPost]
        [Route("upload")]
        public async Task<IActionResult> Upload([FromHeader]List<IFormFile> files)
        {
            long size = files.Sum(f => f.Length);
            //full path to file in temp location 
            var filePath = Path.GetTempFileName();
            
            foreach(var formFile in files)
            {
                if(formFile.Length > 0)
                {
                    Console.Write(formFile.FileName.ToString());
                    Console.Write(formFile.Length); 
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                        await _storageService.UploadAssetAsync(formFile); 
                    }

                    return Ok(); 
                }
            }
            return Content("This did not work");

        }

       
        [Route("api/FileUpload/UploadFile")]
        [HttpPost("UploadFile")]
        public async Task<IActionResult> Post(List<IFormFile> files)
        {
            long size = files.Sum(f => f.Length);

            // full path to file in temp location
            var filePath = Path.GetTempFileName();

            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                       await _storageService.UploadFile(stream); 
                    }
                }
            }

            // process uploaded files
            // Don't rely on or trust the FileName property without validation.

            return Ok(new { count = files.Count, size, filePath });
        }
        //public async Task<IActionResult> UploadFile([FromBody] FileUploadModel model)
        //{


        //    //var file = model.File;

        //    //if (file.Length > 0)
        //    //{
        //    //    var dir = Directory.GetCurrentDirectory();
        //    //    string path = dir; 
        //    //    using (var fs = new FileStream(Path.Combine(path, file.FileName), FileMode.Create))
        //    //    {
        //    //        await file.CopyToAsync(fs); 
        //    //    }
        //    //    //model.Source = $"{Path.Combine(path, file.FileName)}";
        //    //    //model.Extension = Path.GetExtension(file.FileName).Substring(1);
        //    //}
        //    //return BadRequest(); 
        //}

        
    }
}