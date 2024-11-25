using Final.Models;
using Final.TeachingStaffModels;
using Microsoft.EntityFrameworkCore;

namespace Final.Services
{
    public class TeachingStaffServices : ITeachingStaffServices
    {
        private readonly ApplicationDbContext dbContext;

        public TeachingStaffServices(ApplicationDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public async Task<List<TeachingStaff>> GetProfessors()
        {
            List<TeachingStaff> result = dbContext.TeachingStaffs.Where(P=>P.Type== "Professor").ToList();
            return result;
        }

        public async Task<List<TeachingStaff>> GetTAs()
        {
            List<TeachingStaff> result = dbContext.TeachingStaffs.Where(P => P.Type == "TA" || P.Type== "TA Admin").ToList();

            return result;
        }

        public Task<TeachingStaff> GetById(string SSN)
        {
            return dbContext.TeachingStaffs.SingleOrDefaultAsync(I => I.SSN == SSN);
        }
        public bool IsTeachingStaff(string SSN)
        {
            if (dbContext.TeachingStaffs.SingleOrDefault(T => T.SSN == SSN) != null)
                return true;
            return false;
        }

        public async Task<List<UserSchedule>> ProfessorSchedule(string SSN)
        {
            List<UserSchedule> schedules = new List<UserSchedule>();
            List<Lecture> lectures = dbContext.Lectures.Where(l=>l.ProfessorId==SSN).
            ToList();
            TeachingStaff teachingStaff = dbContext.TeachingStaffs.FirstOrDefault(l => l.SSN == SSN);

            foreach (Lecture lecture in lectures)
            {
                Hall hall = dbContext.Halls.FirstOrDefault(l => l.HallID == lecture.HallId)??null;
                Department department = dbContext.Departments.FirstOrDefault(l => l.DepartmentId == lecture.DeptId)??null;
                Course course = dbContext.Courses.FirstOrDefault(l => l.CourseId == lecture.CourseId);
                schedules.Add(new UserSchedule()
                {
                    Year = lecture.Year,
                    Day = lecture.Day,
                    Duration = lecture.Duration,
                    StartTime = lecture.StartTime,
                    Location = hall != null ? hall.HallName : null,
                    DepartmentName = department != null ? department.DepartmentName : null,
                    CourseName = course.CourseName,
                    GroupNumber = lecture != null ? lecture.GroupNumber : null,
                    TeachingStaffName = teachingStaff.FullName
                });
            }
            return schedules;
        }

        public async Task<List<UserSchedule>> TASchedule(string SSN)
        {
            List<Class> classes = dbContext.Classes.
                Where(c => c.TeachingAssistantId == SSN).ToList();
            TeachingStaff teachingStaff = dbContext.TeachingStaffs.FirstOrDefault(l => l.SSN == SSN);

            List<UserSchedule> schedules = new List<UserSchedule>();
            
            foreach (Class class0 in classes)
            {
                Laboratory laboratory = dbContext.Laboratories.FirstOrDefault(l => l.LabId == class0.LaboratoryId);
                Department department = dbContext.Departments.FirstOrDefault(l => l.DepartmentId == class0.DeptId) ?? null;
                Course course = dbContext.Courses.FirstOrDefault(l => l.CourseId == class0.CourseId);
                schedules.Add(new UserSchedule()
                {
                    Section = class0.Section,
                    Year = class0.Year,
                    Day = class0.Day,
                    Duration = class0.Duration,
                    StartTime = class0.StartTime,
                    Location = laboratory.LabName,
                    DepartmentName =department!=null?department.DepartmentName:null,
                    CourseName = course.CourseName,
                    TeachingStaffName = teachingStaff.FullName
                });
            }
            return schedules;
        }
    }
}
