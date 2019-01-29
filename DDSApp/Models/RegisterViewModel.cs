using System.ComponentModel.DataAnnotations;

namespace DDSApp.Models
{
    public class RegisterViewModel
    {
        [DataType(DataType.Text)]
        public string Username { get; set; }

        [EmailAddress]
        public string Email { get; set; }

        [DataType(DataType.Password)] 
        public string Password { get; set; }
    }
}
