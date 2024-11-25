using System.ComponentModel.DataAnnotations;

namespace Final.LoginModels
{
    public class LoginDataRequest
    {
        [Required]
        public string SSN { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
