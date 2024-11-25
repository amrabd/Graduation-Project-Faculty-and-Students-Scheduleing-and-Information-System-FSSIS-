using Final.LoginModels;
using Final.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TestApiJWT.Helpers;

namespace Final.Services
{
    public class Authenticationservices : IAuthenticationServices
    {
        private readonly JWT jwt;
        private readonly ApplicationDbContext dbContext;
        private readonly IITTecnicalServices iTTecnicalServices;
        private readonly IStudentServices studentServices;
        private readonly ITeachingStaffServices teachingStaffServices;

        public Authenticationservices(IOptions<JWT> _JWT,ApplicationDbContext _dbContext,
            IITTecnicalServices _iTTecnicalServices,IStudentServices _studentServices,
            ITeachingStaffServices _teachingStaffServices)
        {
            jwt = _JWT.Value;
            dbContext = _dbContext;
            iTTecnicalServices = _iTTecnicalServices;
            studentServices = _studentServices;
            teachingStaffServices = _teachingStaffServices;
        }

        public async Task<LoginDataResponse> Login(LoginDataRequest model)
        {
            LoginDataResponse AuthModel = new LoginDataResponse();

            var JwtSecurityToken = await CreateJwtToken(model.SSN);
            AuthModel.Token = new JwtSecurityTokenHandler().WriteToken(JwtSecurityToken);
            AuthModel.IsAuthonticated = true;
            AuthModel.ExpiresOn = JwtSecurityToken.ValidTo;

            ITTechnical iTTechnical = await iTTecnicalServices.GetById(model.SSN);
            if (iTTechnical != null)
            {
                if (iTTechnical.Password == model.Password)
                {
                    AuthModel.UserName = iTTechnical.FullName;
                    AuthModel.Role = "ITTechnical";
                    return AuthModel;
                }

            }
            
            Student student = await studentServices.GetById(model.SSN);
            if (student != null)
            {
                if (student.Password == model.Password)
                {
                    AuthModel.UserName = student.FullName;
                    AuthModel.Role = "Student";
                    AuthModel.schedule = studentServices.schedule(model.SSN);
                    return AuthModel;
                }
            }

            TeachingStaff teachingStaff = await teachingStaffServices.GetById(model.SSN);
            if (teachingStaff != null)
            {
                if (teachingStaff.Password == model.Password)
                {
                    AuthModel.UserName = teachingStaff.FullName;
                    
                    if (teachingStaff.Type == "Professor")
                    {
                        AuthModel.Picture = teachingStaff.Picture;
                        AuthModel.Role = "Professor";
                        AuthModel.schedule=await teachingStaffServices.ProfessorSchedule(model.SSN);
                    }

                    if (teachingStaff.Type == "TA Admin")
                    {
                        AuthModel.Role = "TA Admin";
                        AuthModel.Picture = teachingStaff.Picture;
                        AuthModel.schedule = await teachingStaffServices.TASchedule(model.SSN);
                    }

                    if (teachingStaff.Type == "TA")
                    {
                        AuthModel.Picture = teachingStaff.Picture;
                        AuthModel.Role = "TA";
                        AuthModel.schedule = await teachingStaffServices.TASchedule(model.SSN);
                    }
                    return AuthModel;
                }
            }

            AuthModel.Message = "Email or password is incorrect";
            AuthModel.IsAuthonticated = false;
            return AuthModel;
        }


        private async Task<JwtSecurityToken> CreateJwtToken(String SSN)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim("uid", SSN)
            };
            var symmetricSecurityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwt.Key));
            var signingCredentials = new SigningCredentials(symmetricSecurityKey, SecurityAlgorithms.HmacSha256);

            var jwtSecurityToken = new JwtSecurityToken(
                issuer: jwt.Issuer,
                audience: jwt.Audience,
                claims: claims,
                expires: DateTime.Now.AddHours(jwt.DurationInhours),
                signingCredentials: signingCredentials);

            return jwtSecurityToken;
        }
    }
}
