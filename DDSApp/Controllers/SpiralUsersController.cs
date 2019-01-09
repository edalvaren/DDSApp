using System.Collections.Generic;
using DDSApp.Models;
using DDSApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace SpiralUsersApi.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class SpiralUsersController : ControllerBase
    {
        private readonly UserService _userService;

        public SpiralUsersController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet]
        public ActionResult<List<SpiralUser>> Get()
        {
            return _userService.Get();
        }

        [HttpGet("{id:length(24)}", Name = "GetSpiralUser")]
        public ActionResult<SpiralUser> Get(string id)
        {
            var SpiralUser = _userService.Get(id);

            if (SpiralUser == null)
            {
                return NotFound();
            }

            return SpiralUser;
        }

       
        [HttpPost]
        public ActionResult<SpiralUser> Create(SpiralUser SpiralUser)
        {
            _userService.Create(SpiralUser);

            return CreatedAtRoute("GetSpiralUser", new { id = SpiralUser.Id.ToString() }, SpiralUser);
        }

        [HttpPut("{id:length(24)}")]
        public IActionResult Update(string id, SpiralUser SpiralUserIn)
        {
            var SpiralUser = _userService.Get(id);

            if (SpiralUser == null)
            {
                return NotFound();
            }

            _userService.Update(id, SpiralUserIn);

            return NoContent();
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var SpiralUser = _userService.Get(id);

            if (SpiralUser == null)
            {
                return NotFound();
            }

            _userService.Remove(SpiralUser.Id);

            return NoContent();
        }
    }
}