using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDSApp.Models;
using DDSApp.Areas.Abstractions; 

namespace DDSApp.Areas.Repositories
{
    public class UserRepository : EntityBaseRepository<User>, IUserRepository
    {
        public UserRepository(SpiralDocsContext context) : base(context) { }

        public bool isEmailUniq(string email)
        {
            var user = this.GetSingle(u => u.Email == email);
            return user == null;
        }

        public bool IsUsernameUniq(string username)
        {
            var user = this.GetSingle(u => u.Username == username);
            return user == null;
        }
    }
}
