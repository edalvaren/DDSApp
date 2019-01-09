using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.WindowsAzure.Storage;
using Microsoft.WindowsAzure.Storage.Blob;
using System.Threading.Tasks;
using System.Net; 
using LogLevel = Microsoft.Extensions.Logging.LogLevel;
using DDSApp.Services;
using Microsoft.Azure;
using System.IO;
using Microsoft.WindowsAzure.Storage.File;

namespace DDSApp.Controllers
{
    public class FileServiceController : Controller
    {
        
        public async Task OnGet()
        {

        }
        
    }
}