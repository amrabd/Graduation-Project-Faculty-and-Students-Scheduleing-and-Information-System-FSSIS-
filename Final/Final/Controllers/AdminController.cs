using Final.Models;
using Final.ModelsForAdmin;
using Final.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Final.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly IAdminServices adminServices;

        public AdminController(IAdminServices _adminServices)
        {
            adminServices = _adminServices;
        }

        [HttpPost("addclass")]
        public async Task<IActionResult> AddNewClass(ClassDetails classToAdd)
        {
            bool FindConflict = await adminServices.findClasswithinRange(classToAdd);
            if (FindConflict)
                return BadRequest("there is class in this time");

            Class addedClass = await adminServices.AddNewClass(classToAdd);
            return Ok("Class added");
        }

        [HttpPost("addLecture")]
        public async Task<IActionResult> AddNewLecture(LectureDetails LectureToAdd)
        {
            bool FindConflict = await adminServices.findLecturewithinRange(LectureToAdd);
            if (FindConflict)
                return BadRequest("there is Lecture in this time");

            //if (LectureToAdd.Department is null && LectureToAdd.GroupNumber is null)
            //    return BadRequest("GroupNumber and Department can't be both null");

            Lecture addedLecture = await adminServices.AddNewLecture(LectureToAdd);
            return Ok("Lecture added");
        }

        [HttpGet("GetDropListsDetails")]
        public async Task<IActionResult> GetDropListsDetails()
        {
            List<string> courses = await adminServices.GetCoursesNames();
            List<string> departments= await adminServices.GetDepartmentsNames();
            List<string> TAs = await adminServices.GetTaNames();
            List<string> professors = await adminServices.GetProfessorsNames();
            List<int> sections = await adminServices.GetSectionNumbers();

            return Ok(
                new
                {
                    Courses = courses,
                    Departments = departments,
                    Sections = sections,
                    TAs = TAs,
                    Professors = professors
                }
                );
        }

        [HttpGet("GetAllClasses")]
        public async Task<IActionResult> GetAllClasses()
        {
            List<ClassDetailsForLabs> classes = await adminServices.GetClassesDetails();
            return Ok(classes);
        }

        [HttpGet("GetAllLectures")]
        public async Task<IActionResult> GetAllLectures()
        {
            List<LectureDetailsforHalls> lectures = await adminServices.GetLecturesDetails();
            return Ok(lectures);
        }
        [HttpDelete("DeleteClass")]
        public async Task<IActionResult> DeleteClass(DeleteClassOrLecture ClassId)
        {
            bool Deleted = await adminServices.DeleteClass(ClassId);
            if (!Deleted)
                return BadRequest("Id is not found");

            return Ok($"Class with id {ClassId.Id} Deleted");
        }

        [HttpDelete("DeleteLecture")]
        public async Task<IActionResult> DeleteLecture(DeleteClassOrLecture LectureId)
        {
            bool Deleted = await adminServices.DeleteLecture(LectureId);
            if (!Deleted)
                return BadRequest("Id is not found");

            return Ok($"Lecture with id {LectureId.Id} Deleted");
        }

        [HttpPut("Update-Class")]
        public async Task<IActionResult> UpdateClassDetails(UpdateClassDetails ClassDetails)
        {
            bool checkGood = await adminServices.UpdateClass(ClassDetails);
            if (!checkGood)
                return BadRequest("Duration is confilected with another class");

            return Ok("Updated successfully");
        }

        [HttpPut("Update-Lecture")]
        public async Task<IActionResult> UpdateLectureDetails(UpdateLectureDetails LectureDetails)
        {
            bool checkGood = await adminServices.UpdateLecture(LectureDetails);
            if (!checkGood)
                return BadRequest("Duration is confilected with another Lecture");

            return Ok("Updated successfully");
        }
    }   
}
