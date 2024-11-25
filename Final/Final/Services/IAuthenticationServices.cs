using Final.LoginModels;

namespace Final.Services
{
    public interface IAuthenticationServices
    {
        Task<LoginDataResponse> Login(LoginDataRequest model); // Login
    }
}
