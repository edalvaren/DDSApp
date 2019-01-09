using System.Collections.Generic;
using DDSApp.Models;
using DDSApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace DDSApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SpiralDocsController : ControllerBase
    {
        private readonly SpiralDocService _docService;

        public SpiralDocsController(SpiralDocService docService)
        {
            _docService = docService;
        }
        [HttpGet]
        public ActionResult<List<SpiralDoc>> Get()
        {
            return _docService.Get();
        }

        [HttpGet("{id:length(24)}", Name = "GetSpiralDoc")]
        public ActionResult<SpiralDoc> Get(string id)
        {
            var SpiralDoc = _docService.Get(id);

            if (SpiralDoc == null)
            {
                return NotFound();
            }

            return SpiralDoc;
        }


        [HttpPost]
        public ActionResult<SpiralDoc> Create(SpiralDoc SpiralDoc)
        {
            _docService.Create(SpiralDoc);

            return CreatedAtRoute("Get Spiral Document", new { id = SpiralDoc.Id.ToString() }, SpiralDoc);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, SpiralDoc SpiralDocIn)
        {
            var SpiralDoc = _docService.Get(id);

            if (SpiralDoc == null)
            {
                return NotFound();
            }

            _docService.Update(id, SpiralDocIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var SpiralDoc = _docService.Get(id);

            if (SpiralDoc == null)
            {
                return NotFound();
            }

            _docService.Remove(SpiralDoc.Id);

            return NoContent();
        }
    }
}