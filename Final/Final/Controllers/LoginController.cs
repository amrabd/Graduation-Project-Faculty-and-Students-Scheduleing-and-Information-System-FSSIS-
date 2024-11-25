using Final.LoginModels;
using Final.Models;
using Final.Services;
using Final.TeachingStaffModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Runtime.Intrinsics.X86;

namespace Final.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IAuthenticationServices authenticationservices;

        public LoginController(IAuthenticationServices _authenticationservices)
        {
            authenticationservices = _authenticationservices;
        }


        [HttpPost("Login")]
        public async Task<IActionResult> Login(LoginDataRequest Data)
        {
            LoginDataResponse AuthModel = await authenticationservices.Login(Data);
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            if (!AuthModel.IsAuthonticated)
                return BadRequest(AuthModel.Message);
            return Ok(
                new
                {
                    Token = AuthModel.Token,
                    ExpiresOn = AuthModel.ExpiresOn,
                    UserName = AuthModel.UserName,
                    Role = AuthModel.Role,
                    Picture = AuthModel.Picture,
                    Schedule = AuthModel.schedule
                });
        }

    }
}
