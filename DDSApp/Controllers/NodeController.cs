using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.NodeServices;
using System.IO;
using System.Threading.Tasks;

namespace DDSApp.Controllers
{
    public class NodeController : Controller
    {
        private readonly INodeServices _nodeServices;

        public NodeController(INodeServices nodeServices)
        {
            _nodeServices = nodeServices;
        }

        public async Task<IActionResult> SampleAction([FromServices] INodeServices nodeServices)
        {
            var result = await _nodeServices.InvokeAsync<int>("ethip.js");
            return Content(result.ToString());
        }

        public async Task<IActionResult> Create(
        [FromServices]INodeServices nodeServices)
        {
            var html = "<h1>Hey!</h1>"; // html to be converted
            var options = new { }; // html-pdf options
            var stream = await nodeServices.InvokeAsync<Stream>(
                "createPdf.js", // script to invoke
                html,
                options
            );
            return File(
                fileStream: stream,
                contentType: "application/pdf"
            );
        }

        public async Task<IActionResult> Read(
        [FromServices]INodeServices nodeServices)
        {
            var stream = await nodeServices.InvokeAsync<string>("ReadTag.js");
            return Content(stream);
        }
    }
}
