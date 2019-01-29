using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDSApp.Models; 

namespace DDSApp.Areas.Abstractions
{
    public interface IUserRepository : IEntityBaseRepository<User>
    {
        bool isEmailUniq(string email);
        bool IsUsernameUniq(string username);


    }
}
