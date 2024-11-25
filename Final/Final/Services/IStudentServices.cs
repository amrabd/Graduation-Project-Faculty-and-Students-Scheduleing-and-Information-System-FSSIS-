using Final.courseModels;
using Final.MaterialModels;
using Final.Models;
using Final.TeachingStaffModels;

namespace Final.Services
{
    public interface IStudentServices
    {
        Task<List<Student>> GetAll();
        Task<LevelLink> Links();
        Task<LevelCourse> Courses();
        Task<Student> GetById(string SSN);
        bool IsStudent(string SSN);
        List<Enrollment> enrollments(string SSN);
        List<UserSchedule> schedule(string SSN);
    }
}
