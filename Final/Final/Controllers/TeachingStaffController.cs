using Final.Models;
using Final.Services;
using Final.TeachingStaffModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Final.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeachingStaffController : ControllerBase
    {
        private readonly ITeachingStaffServices teachingStaffServices;
        private readonly IDepartmentServices departmentServices;

        public TeachingStaffController(ITeachingStaffServices _teachingStaffServices,
            IDepartmentServices _departmentServices)
        {
            teachingStaffServices = _teachingStaffServices;
            departmentServices = _departmentServices;
        }

        [HttpGet("ViewProfessor")]
        public async Task<IActionResult> ViewProfessors()
        {
            List<TeachingStaff> Professors = await teachingStaffServices.GetProfessors();

            List<TeachingStaffData> Results = new List<TeachingStaffData>();
            foreach (TeachingStaff TeachingStaff in Professors)
            {
                Department department = await departmentServices.GetByID(TeachingStaff.DeptId);
                Results.Add(new TeachingStaffData
                {
                    SSN = TeachingStaff.SSN,
                    FullName = TeachingStaff.FullName,
                    AcadimicMailLink = TeachingStaff.AcadimicMailLink,
                    Discription = TeachingStaff.Discription,
                    FacebookLink = TeachingStaff.FacebookLink,
                    GithubLink = TeachingStaff.GithubLink,
                    LinkedInLink = TeachingStaff.LinkedInLink,
                    Picture = TeachingStaff.Picture,
                    DeptName = department.DepartmentName
                });
            }
            return Ok(Results);
        }
        [HttpGet("ViewTeachingAssistant")]
        public async Task<IActionResult> ViewTeachingAssistant()
        {
            List<TeachingStaff> TAs = await teachingStaffServices.GetTAs();

            List<TeachingStaffData> Results = new List<TeachingStaffData>();
            foreach (TeachingStaff TeachingStaff in TAs)
            {
                Department department = await departmentServices.GetByID(TeachingStaff.DeptId);
                Results.Add(new TeachingStaffData
                {
                    SSN = TeachingStaff.SSN,
                    FullName = TeachingStaff.FullName,
                    AcadimicMailLink = TeachingStaff.AcadimicMailLink,
                    Discription = TeachingStaff.Discription,
                    FacebookLink = TeachingStaff.FacebookLink,
                    GithubLink = TeachingStaff.GithubLink,
                    LinkedInLink = TeachingStaff.LinkedInLink,
                    Picture = TeachingStaff.Picture,
                    DeptName = department.DepartmentName

                });
            }
            return Ok(Results);
        }


    }
}
