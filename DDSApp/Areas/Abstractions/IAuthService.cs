using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DDSApp.Models; 

namespace DDSApp.Areas.Abstractions
{
    public interface IAuthService
    {

        AuthData GetAuthData(string id);  
        string HashPassword(string password);
        bool VerifyPassword(string actualPassword, string hashedPassword); 
    }
}
