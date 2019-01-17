using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Search.Models;
using DDSApp.Services;
using Microsoft.Extensions.Configuration;
using DDSApp.Models;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using Microsoft.AspNetCore.Http; 

namespace DDSApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchController : Controller
    {
        private DocsSearchService _docsSearch; 

        public SearchController(IConfiguration config)
        {
            _docsSearch = new DocsSearchService(config); 
            
        }

        [HttpGet]
        public ActionResult<DocumentSearchResult> Get()
        {
            var data = _docsSearch.Get();
            return data; 
        }

        public IActionResult Index()
        {
           
            return View();
        }

        [HttpGet("{searchQuery}", Name = "SearchbyQuery")]
        public JsonResult Search(string searchQuery)
        {
            if (string.IsNullOrWhiteSpace(searchQuery))
                searchQuery = "*";

            var data = _docsSearch.Search(searchQuery);
            var jsonData = Json(data);
            var data0 = new SearchResultObject();

            return Json(data);
        }

        [HttpPost]
        public async Task<IActionResult> UploadFileAsync(List<IFormFile> files)
        {
            long size = files.Sum(f => f.Length);
            var filePath = Path.GetTempFileName();
            foreach (var formFile in files)
            {
                if (formFile.Length > 0)
                {
                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await formFile.CopyToAsync(stream);
                    }
                }
            }
            return Ok(new { count = files.Count, size, filePath });

    }


    }
}