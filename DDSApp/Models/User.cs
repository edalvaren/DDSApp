using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDSApp.Areas.Abstractions; 

namespace DDSApp.Models
{
    public class User : IEntityBase
    {
        public User()
        {
            Stories = new List<Story>();
            Likes = new List<Like>();
        }
        public string Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public List<Story> Stories { get; set; }
        public List<Like> Likes { get; set; }

    }
}
