using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Search.Models;
using DDSApp.Services;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using DDSApp.Models; 

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


    }
}