using Final.courseModels;
using Final.MaterialModels;
using Final.Models;
using Final.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Final.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentController : ControllerBase
    {
        private readonly IStudentServices studentServices;

        public StudentController(IStudentServices _studentServices)
        {
            studentServices = _studentServices;
        }

        [HttpGet("AllStudents")]
        public async Task<IActionResult> GetAllStudents()
        {
            List<Student> students =await studentServices.GetAll();
            return Ok(students);
        }
        [HttpGet("StudentSchedule")]
        public IActionResult StudentSchedule(string SSN)
        {
            return Ok(studentServices.schedule(SSN));
        }

        [HttpGet("StudentMaterial")]
        public async Task<IActionResult> StudentMaterial()
        {
            LevelLink studentLink =await studentServices.Links();
            return Ok(studentLink);
        }

        [HttpGet("StudentCourses")]
        public async Task<IActionResult> StudentCourses()
        {
            LevelCourse studentCourses = await studentServices.Courses();
            return Ok(studentCourses);
        }

    }
}
