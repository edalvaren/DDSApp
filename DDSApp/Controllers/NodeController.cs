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

      
   
    }
}
