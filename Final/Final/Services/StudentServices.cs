using Final.CourseModels;
using Final.courseModels;
using Final.MaterialModels;
using Final.Models;
using Final.TeachingStaffModels;
using Microsoft.EntityFrameworkCore;
namespace Final.Services
{
    public class StudentServices : IStudentServices
    {
        private readonly ApplicationDbContext dbContext;

        public StudentServices(ApplicationDbContext _dbContext)
        {
            dbContext = _dbContext;
        }
        public GetPreCourses GetPreCourseVar = new GetPreCourses();


        public async Task<List<Student>> GetAll()
        {
            List<Student> result = dbContext.Students.ToList();

            return result;
        }

        public async Task<Student> GetById(string SSN)
        {
            return await dbContext.Students.SingleOrDefaultAsync(I => I.SSN == SSN);
        }

        public bool IsStudent(string SSN)
        {
            if (dbContext.Students.SingleOrDefault(S => S.SSN == SSN) != null)
                return true;
            return false;
        }

        public List<Enrollment> enrollments(string SSN)
        {
            List<Enrollment> enrollments = dbContext.Enrollments.Where(E => E.StudentId == SSN).ToList();
            return enrollments;
        }


        public List<UserSchedule> schedule(string SSN)
        {
            Student student = dbContext.Students.FirstOrDefault(s => s.SSN == SSN);

            List<Enrollment> enrollments = dbContext.Enrollments.Where(s => s.StudentId == SSN).ToList();

            List<Class> classes = dbContext.Classes.
                Where(c => c.Section == student.Section && c.Year == student.Level).ToList();

            List<Lecture> lectures = dbContext.Lectures.
                Where(l =>
                l.Year == student.Level && (l.GroupNumber == student.GroupNumber
                || l.DeptId == student.DeptId)).
                ToList();

            List<UserSchedule> schedules = new List<UserSchedule>();
            foreach(Class class0 in classes)
            {
                Enrollment found = enrollments.FirstOrDefault(e => e.CourseId == class0.CourseId);
                if (found is null)
                    continue;
                

                Laboratory laboratory = dbContext.Laboratories.FirstOrDefault(l => l.LabId == class0.LaboratoryId)??null;
                Department department = dbContext.Departments.FirstOrDefault(l => l.DepartmentId == class0.DeptId) ?? null;
                Course course = dbContext.Courses.FirstOrDefault(l => l.CourseId == class0.CourseId);
                TeachingStaff teachingStaff = dbContext.TeachingStaffs.FirstOrDefault(l => l.SSN == class0.TeachingAssistantId);
                schedules.Add(new UserSchedule()
                {
                    Section = class0.Section,
                    Year = class0.Year,
                    Day = class0.Day,
                    Duration = class0.Duration,
                    StartTime = class0.StartTime,
                    Location =laboratory!=null? laboratory.LabName:null,
                    DepartmentName = department!=null? department.DepartmentName:null,
                    CourseName = course.CourseName,
                    TeachingStaffName = teachingStaff.FullName
                });
            }

            foreach (Lecture lecture in lectures)
            {
                Enrollment found = enrollments.FirstOrDefault(e => e.CourseId == lecture.CourseId);
                if (found is null)
                    continue;


                Hall hall = dbContext.Halls.FirstOrDefault(l => l.HallID == lecture.HallId) ?? null;
                Department department = dbContext.Departments.FirstOrDefault(l => l.DepartmentId == lecture.DeptId) ?? null;
                Course course = dbContext.Courses.FirstOrDefault(l => l.CourseId == lecture.CourseId);
                TeachingStaff teachingStaff = dbContext.TeachingStaffs.FirstOrDefault(l => l.SSN == lecture.ProfessorId);
                schedules.Add(new UserSchedule()
                {
                    Year = lecture.Year,
                    Day = lecture.Day,
                    Duration = lecture.Duration,
                    StartTime = lecture.StartTime,
                    Location = hall != null ? hall.HallName : null,
                    DepartmentName = department != null ? department.DepartmentName : null,
                    CourseName = course.CourseName,
                    GroupNumber = department == null ? lecture.GroupNumber : null,
                    TeachingStaffName = teachingStaff.FullName
                });
            }
            return schedules;
        }


        public async Task<LevelLink> Links()
        {
            LevelLink link = new LevelLink();
            TermLevelLink1_2 Level1 = new TermLevelLink1_2();
            TermLevelLink1_2 Level2 = new TermLevelLink1_2();
            
            TermLevelLink3_4 Level3 = new TermLevelLink3_4();
            DepartmentLink L3T1 = new DepartmentLink();
            DepartmentLink L3T2 = new DepartmentLink();

            TermLevelLink3_4 Level4 = new TermLevelLink3_4();
            DepartmentLink L4T1 = new DepartmentLink();
            DepartmentLink L4T2 = new DepartmentLink();


            // level 1

            Level1.Term1 = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term1" && s.Level == 1).GoogleDrive
            };
            Level1.Term2 = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term2" && s.Level == 1).GoogleDrive
            };

            // level 2

            Level2.Term1 = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term1" && s.Level == 2).GoogleDrive
            };

            Level2.Term2 = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term2" && s.Level == 2).GoogleDrive
            };


            // level 3 term 1

            L3T1.IS = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term1" && s.Level == 3 && s.DeptId == "1").GoogleDrive
            };
            L3T1.CS = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term1" && s.Level == 3 && s.DeptId == "2").GoogleDrive
            };
            L3T1.MM = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term1" && s.Level == 3 && s.DeptId == "3").GoogleDrive
            };
            L3T1.IT = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term1" && s.Level == 3 && s.DeptId == "4").GoogleDrive
            };
            Level3.Term1 = L3T1;

            // level 3 term 2

            L3T2.IS = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term2" && s.Level == 3 && s.DeptId == "1").GoogleDrive
            };
            L3T2.CS = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term2" && s.Level == 3 && s.DeptId == "2").GoogleDrive
            };
            L3T2.MM = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term2" && s.Level == 3 && s.DeptId == "3").GoogleDrive
            };
            L3T2.IT = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term2" && s.Level == 3 && s.DeptId == "4").GoogleDrive
            };
            Level3.Term2 = L3T2;

            // level 4 term 1

            L4T1.IS = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term1" && s.Level == 4 && s.DeptId == "1").GoogleDrive
            };
            L4T1.CS = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term1" && s.Level == 4 && s.DeptId == "2").GoogleDrive
            };
            L4T1.MM = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term1" && s.Level == 4 && s.DeptId == "3").GoogleDrive
            };
            L4T1.IT = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term1" && s.Level == 4 && s.DeptId == "4").GoogleDrive
            };
            Level4.Term1 = L4T1;


            // level 4 term 2

            L4T2.IS = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term2" && s.Level == 4 && s.DeptId == "1").GoogleDrive
            };
            L4T2.CS = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term2" && s.Level == 4 && s.DeptId == "2").GoogleDrive
            };
            L4T2.MM = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term2" && s.Level == 4 && s.DeptId == "3").GoogleDrive
            };
            L4T2.IT = new GoogleDriveLink()
            {
                Link = dbContext.Semesters.FirstOrDefault(s => s.TermType == "Term2" && s.Level == 4 && s.DeptId == "4").GoogleDrive
            };
            Level4.Term2 = L4T2;
            
            link.Level1 = Level1;
            link.Level2 = Level2;
            link.Level3 = Level3;
            link.Level4 = Level4;
            return link;
        }

        public async Task<LevelCourse> Courses()
        {
            LevelCourse link = new LevelCourse();
            TermLevel1_2 Level1 = new TermLevel1_2();
            TermLevel1_2 Level2 = new TermLevel1_2();

            TermLevel3_4 Level3 = new TermLevel3_4();
            DepartmentCourse L3T1 = new DepartmentCourse();
            DepartmentCourse L3T2 = new DepartmentCourse();

            TermLevel3_4 Level4 = new TermLevel3_4();
            DepartmentCourse L4T1 = new DepartmentCourse();
            DepartmentCourse L4T2 = new DepartmentCourse();

            // level 1

            Level1.Term1 = GetPreCourseVar.CoursesDataForL12(dbContext.Prerequesets.ToList(),
                dbContext.Courses.ToList(), "Term1", 1);

            Level1.Term2 = GetPreCourseVar.CoursesDataForL12(dbContext.Prerequesets.ToList(),
                dbContext.Courses.ToList(), "Term2", 1);

            // level 2

            Level2.Term1 = GetPreCourseVar.CoursesDataForL12(dbContext.Prerequesets.ToList(),
                dbContext.Courses.ToList(), "Term1", 2);

            Level2.Term2 = GetPreCourseVar.CoursesDataForL12(dbContext.Prerequesets.ToList(),
                dbContext.Courses.ToList(), "Term2", 2);

            // level 3
            L3T1.IS = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term1", 3, "1");

            L3T1.CS = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term1", 3, "2");

            L3T1.MM = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term1", 3, "3");

            L3T1.IT = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term1", 3, "4");

            // level 3 Term 1
            Level3.Term1 = L3T1;

            L3T2.IS = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term2", 3, "1");

            L3T2.CS = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term2", 3, "2");

            L3T2.MM = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term2", 3, "3");

            L3T2.IT = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term2", 3, "4");

            // level 3 Term 2
            Level3.Term2 = L3T2;


            // level 4
            L4T1.IS = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term1", 4, "1");

            L4T1.CS = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term1", 4, "2");

            L4T1.MM = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term1", 4, "3");

            L4T1.IT = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term1", 4, "4");

            // level 4 Term 1
            Level4.Term1 = L4T1;

            L4T2.IS = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term2", 4, "1");

            L4T2.CS = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term2", 4, "2");

            L4T2.MM = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term2", 4, "3");

            L4T2.IT = GetPreCourseVar.CoursesDataForL34(dbContext.Prerequesets.ToList(), dbContext.Courses.ToList(),
                dbContext.Course_Department.ToList(), "Term2", 4, "4");

            // level 4 Term 2
            Level4.Term2 = L4T2;

            link.Level1 = Level1;
            link.Level2 = Level2;
            link.Level3 = Level3;
            link.Level4 = Level4;
            return link;
        }

    }
}
