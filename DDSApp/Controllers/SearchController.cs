using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Search.Models;
using DDSApp.Services;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json; 

namespace DDSApp.Controllers
{
    public class SearchController : Controller
    {
        private DocsSearchService _docsSearch; 

        public SearchController(IConfiguration config)
        {
            _docsSearch = new DocsSearchService(config); 
            
        }

        public IActionResult Index()
        {
           
            return View();
        }

        public JsonResult Search(string q = "")
        {
            if (string.IsNullOrWhiteSpace(q))
                q = "*";

            var data = _docsSearch.Search(q); 

            return Json(data);
        }


    }
}