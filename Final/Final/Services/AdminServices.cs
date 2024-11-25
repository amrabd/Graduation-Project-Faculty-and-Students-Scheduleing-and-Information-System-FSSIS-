using Final.Models;
using Final.ModelsForAdmin;
using Microsoft.EntityFrameworkCore;
using System;

namespace Final.Services
{

    public class AdminServices : IAdminServices
    {
        private readonly ApplicationDbContext dbContext;

        public AdminServices(ApplicationDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public async Task<Class> AddNewClass(ClassDetails classToAdd)
        {
            Department ?ClassDepartment = dbContext.Departments.SingleOrDefault(d => d.DepartmentName == classToAdd.Department);

            Course ?ClassCourse = dbContext.Courses.SingleOrDefault(co => co.CourseName == classToAdd.Course);

            TeachingStaff ?ClassTeachingStaff = dbContext.TeachingStaffs.SingleOrDefault(t => t.FullName == classToAdd.Ta);

            Laboratory ?ClassLaboratory = dbContext.Laboratories.SingleOrDefault(l => l.LabName == classToAdd.LabName);

            Class c = new Class()
            {
                ClassId=Guid.NewGuid().ToString(),
                Day = classToAdd.Day,
                Duration = classToAdd.Duration,
                Year = classToAdd.Year,
                Section = classToAdd.Section,
                StartTime = classToAdd.Start,
                CourseId=ClassCourse?.CourseId,
                LaboratoryId=ClassLaboratory?.LabId,
                TeachingAssistantId=ClassTeachingStaff?.SSN
            };

            if (classToAdd.Department is not null)
                c.DeptId = ClassDepartment.DepartmentId;
            await dbContext.Classes.AddAsync(c);
            await dbContext.SaveChangesAsync();
            return c;
        
        }

        public async Task<bool> findClasswithinRange(ClassDetails classToAdd)
        {
            // check the end of class doesn't end more than time 18
            if (classToAdd.Start + classToAdd.Duration > 20)
                return true;

            // check if same ta has class in same time in the same day
            TeachingStaff TaWithName = dbContext.TeachingStaffs.FirstOrDefault(t => t.FullName == classToAdd.Ta);
            if (dbContext.Classes.Any(c => !(classToAdd.Start + classToAdd.Duration <= c.StartTime || c.StartTime + c.Duration <= classToAdd.Start) && classToAdd.Day == c.Day && c.TeachingAssistantId == TaWithName.SSN))
                return true;

            // check confilect of two classes in same day and same lab
            Laboratory l = dbContext.Laboratories.SingleOrDefault(ha => ha.LabName == classToAdd.LabName);
            List<Class> classes = await dbContext.Classes.Where(c => c.Day == classToAdd.Day && l.LabId==c.LaboratoryId).ToListAsync();
            return classes.Any(l => !(classToAdd.Start + classToAdd.Duration <= l.StartTime || l.StartTime + l.Duration <= classToAdd.Start));
        }

        public async Task<Lecture> AddNewLecture(LectureDetails lectureToAdd)
        {
            Department? ClassDepartment = dbContext.Departments.SingleOrDefault(d => d.DepartmentName == lectureToAdd.Department);

            Course? ClassCourse = dbContext.Courses.SingleOrDefault(co => co.CourseName == lectureToAdd.Course);

            TeachingStaff? ClassTeachingStaff = dbContext.TeachingStaffs.SingleOrDefault(t => t.FullName == lectureToAdd.Professor);

            Hall? ClassHall = dbContext.Halls.SingleOrDefault(l => l.HallName == lectureToAdd.HallName);

            Lecture l = new Lecture()
            {
                LectureId = Guid.NewGuid().ToString(),
                Day = lectureToAdd.Day,
                Duration = lectureToAdd.Duration,
                Year = lectureToAdd.Year,
                StartTime = lectureToAdd.Start,
                CourseId = ClassCourse?.CourseId,
                HallId = ClassHall?.HallID,
                ProfessorId = ClassTeachingStaff?.SSN
            };

            if (lectureToAdd.Department is not null)
                l.DeptId = ClassDepartment.DepartmentId;

            if (lectureToAdd.GroupNumber is not null)
                l.GroupNumber = lectureToAdd.GroupNumber;

            await dbContext.Lectures.AddAsync(l);
            await dbContext.SaveChangesAsync();
            return l;

        }

        public async Task<bool> findLecturewithinRange(LectureDetails LectureToAdd)
        {
            if (LectureToAdd.Start + LectureToAdd.Duration > 20)
                return true;

            // check if same ta has class in same time in the same day
            TeachingStaff profWithName = dbContext.TeachingStaffs.FirstOrDefault(t => t.FullName == LectureToAdd.Professor);
            if (dbContext.Lectures.Any(c => !(LectureToAdd.Start + LectureToAdd.Duration <= c.StartTime || c.StartTime + c.Duration <= LectureToAdd.Start) && LectureToAdd.Day == c.Day && c.ProfessorId == profWithName.SSN))
                return true;


            Hall h = dbContext.Halls.SingleOrDefault(ha => ha.HallName == LectureToAdd.HallName);
            List<Lecture> lectures = await dbContext.Lectures.Where(l => l.Day == LectureToAdd.Day && l.HallId == h.HallID).ToListAsync();

            return lectures.Any(l => !(LectureToAdd.Start + LectureToAdd.Duration <= l.StartTime || l.StartTime + l.Duration <= LectureToAdd.Start));
        }

        public async Task<List<ClassDetailsForLabs>> GetClassesDetails()
        {
            List<ClassDetailsForLabs> Result = new List<ClassDetailsForLabs>();
            List<Class> classes = dbContext.Classes.ToList();   
            foreach (Class c in classes)
            {
                ClassDetailsForLabs LabToAdd = new ClassDetailsForLabs();
                LabToAdd.ClassId = c.ClassId;
                LabToAdd.Start = c.StartTime;
                LabToAdd.Day = c.Day;
                LabToAdd.Duration = c.Duration;
                LabToAdd.Section = c.Section;
                LabToAdd.Year = c.Year;
               
                Department ClassDepartment =dbContext.Departments.FirstOrDefault(d => d.DepartmentId == c.DeptId);
                if (ClassDepartment != null)
                    LabToAdd.Department = ClassDepartment.DepartmentName;
                
                Course ClassCourse = dbContext.Courses.FirstOrDefault(co => co.CourseId == c.CourseId);
                LabToAdd.Course = ClassCourse.CourseName;
                
                TeachingStaff ClassTeachingStaff = dbContext.TeachingStaffs.FirstOrDefault(t => t.SSN == c.TeachingAssistantId);
                LabToAdd.Ta = ClassTeachingStaff.FullName;
                
                Laboratory ClassLaboratory = dbContext.Laboratories.FirstOrDefault(l => l.LabId == c.LaboratoryId);
                LabToAdd.LabName = ClassLaboratory.LabName;

                Result.Add(LabToAdd);
            }
            return Result;
        }

        public async Task<List<LectureDetailsforHalls>> GetLecturesDetails()
        {
            List<LectureDetailsforHalls> Result = new List<LectureDetailsforHalls>();
            List<Lecture> lectures = dbContext.Lectures.ToList();
            foreach (Lecture l in lectures)
            {
                LectureDetailsforHalls HallToAdd = new LectureDetailsforHalls();
                HallToAdd.LectureID = l.LectureId;
                HallToAdd.Start = l.StartTime;
                HallToAdd.Day = l.Day;
                HallToAdd.Duration = l.Duration;
                HallToAdd.Year = l.Year;
                if (l.GroupNumber is not null)
                    HallToAdd.GroupNumber = l.GroupNumber;

                Department LectureDepartment = dbContext.Departments.FirstOrDefault(d => d.DepartmentId == l.DeptId);
                if (LectureDepartment != null)
                    HallToAdd.Department = LectureDepartment.DepartmentName;

                Course LectureCourse = dbContext.Courses.FirstOrDefault(co => co.CourseId == l.CourseId);
                HallToAdd.Course = LectureCourse.CourseName;

                TeachingStaff LectureTeachingStaff = dbContext.TeachingStaffs.FirstOrDefault(t => t.SSN == l.ProfessorId);
                HallToAdd.Professor = LectureTeachingStaff.FullName;

                Hall LectureHall = dbContext.Halls.FirstOrDefault(le => le.HallID == l.HallId);
                HallToAdd.HallName = LectureHall.HallName;

                Result.Add(HallToAdd);
            }
            return Result;
        }
        public async Task<List<string>> GetCoursesNames()
        {
            return await dbContext.Courses.Select(c => c.CourseName).Distinct().ToListAsync();
        }

        public async Task<List<string>> GetTaNames()
        {
            return await dbContext.TeachingStaffs.Where(t => t.Type == "TA" || t.Type== "TA Admin").Select(c => c.FullName).Distinct().ToListAsync();
        }

        public async Task<List<string>> GetProfessorsNames()
        {
            return await dbContext.TeachingStaffs.Where(t => t.Type == "Professor").Select(c => c.FullName).Distinct().ToListAsync();
        }

        public async Task<List<string>> GetDepartmentsNames()
        {
            return await dbContext.Departments.Select(c => c.DepartmentName).Distinct().ToListAsync();
        }

        public async Task<List<int>> GetSectionNumbers()
        {
            return new List<int> { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 };
        }

        public async Task<bool> DeleteClass(DeleteClassOrLecture ClassId)
        {
            Class ClassWithId = dbContext.Classes.FirstOrDefault(c => c.ClassId == ClassId.Id);
            if (ClassWithId == null)
                return false;

            dbContext.Classes.Remove(ClassWithId);
            await dbContext.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteLecture(DeleteClassOrLecture LectureId)
        {
            Lecture LectureWithId = dbContext.Lectures.FirstOrDefault(c => c.LectureId == LectureId.Id);
            if (LectureWithId == null)
                return false;

            dbContext.Lectures.Remove(LectureWithId);
            await dbContext.SaveChangesAsync();

            return true;
        }

        public async Task<bool> UpdateClass(UpdateClassDetails ClassDetails)
        {
            Class OldClass = dbContext.Classes.FirstOrDefault(c => c.ClassId == ClassDetails.ClassId);
            if (OldClass is null)
                return false;

            Department? ClassDepartment = dbContext.Departments.SingleOrDefault(d => d.DepartmentName == ClassDetails.Department);

            Course? ClassCourse = dbContext.Courses.SingleOrDefault(co => co.CourseName == ClassDetails.Course);

            TeachingStaff? ClassTeachingStaff = dbContext.TeachingStaffs.SingleOrDefault(t => t.FullName == ClassDetails.Ta);

            OldClass.Section=ClassDetails.Section;
            OldClass.Year=ClassDetails.Year;
            OldClass.TeachingAssistantId = ClassTeachingStaff.SSN;
            OldClass.CourseId = ClassCourse.CourseId;

            if (ClassDepartment is not null)
                OldClass.DeptId = ClassDepartment.DepartmentId;

            // validate new duration
            if (ClassDetails.Duration + OldClass.StartTime > 20)
                return false;

            // validate if two classes confilect

            //1
            List<Class> classes2 = await dbContext.Classes.Where(c => c.ClassId != OldClass.ClassId && c.Day == OldClass.Day).ToListAsync();
            TeachingStaff TaWithName = dbContext.TeachingStaffs.FirstOrDefault(t => t.FullName == ClassDetails.Ta);
            if (classes2.Any(c => !(OldClass.StartTime + ClassDetails.Duration <= c.StartTime || c.StartTime + c.Duration <= OldClass.StartTime) && OldClass.Day == c.Day && c.TeachingAssistantId == TaWithName.SSN))
                return true;
            
            //2
            List<Class> classes1 = await dbContext.Classes.Where(c => c.ClassId != OldClass.ClassId && c.Day == OldClass.Day && OldClass.LaboratoryId == c.LaboratoryId).ToListAsync();

            if (!classes1.Any(l => !(OldClass.StartTime + ClassDetails.Duration <= l.StartTime || l.StartTime + l.Duration <= OldClass.StartTime)))
                OldClass.Duration = ClassDetails.Duration;
            else
                return false;


            dbContext.Classes.Update(OldClass);
            dbContext.SaveChanges();
            return true;
        }

        public async Task<bool> UpdateLecture(UpdateLectureDetails LectureDetails)
        {
            Lecture OldLecture = dbContext.Lectures.FirstOrDefault(c => c.LectureId == LectureDetails.LectureID);
            if (OldLecture is null)
                return false;

            Department? ClassDepartment = dbContext.Departments.SingleOrDefault(d => d.DepartmentName == LectureDetails.Department);

            Course? ClassCourse = dbContext.Courses.SingleOrDefault(co => co.CourseName == LectureDetails.Course);

            TeachingStaff? ClassTeachingStaff = dbContext.TeachingStaffs.SingleOrDefault(t => t.FullName == LectureDetails.Professor);

            OldLecture.Year = LectureDetails.Year;
            OldLecture.ProfessorId = ClassTeachingStaff.SSN;
            OldLecture.CourseId = ClassCourse.CourseId;

            if (ClassDepartment is not null)
                OldLecture.DeptId = ClassDepartment.DepartmentId;

            if (LectureDetails.GroupNumber is not null)
                OldLecture.GroupNumber = LectureDetails.GroupNumber;


            // validate new duration
            if (LectureDetails.Duration + OldLecture.StartTime > 20)
                return false;

            // validate if two classes confilect

            //1
            List<Lecture> lectures2 = await dbContext.Lectures.Where(c => c.LectureId != OldLecture.LectureId && c.Day == OldLecture.Day).ToListAsync();
            TeachingStaff ProfWithName = dbContext.TeachingStaffs.FirstOrDefault(t => t.FullName == LectureDetails.Professor);
            if (lectures2.Any(c => !(OldLecture.StartTime + LectureDetails.Duration <= c.StartTime || c.StartTime + c.Duration <= OldLecture.StartTime) && OldLecture.Day == c.Day && c.ProfessorId == ProfWithName.SSN))
                return false;

            //2
            List<Lecture> lectures = await dbContext.Lectures.Where(l => l.LectureId!= OldLecture.LectureId && l.Day == OldLecture.Day && l.HallId == OldLecture.HallId).ToListAsync();

            if (!lectures.Any(l => !(OldLecture.StartTime + LectureDetails.Duration <= l.StartTime || l.StartTime + l.Duration <= OldLecture.StartTime)))
                OldLecture.Duration = LectureDetails.Duration;
            else
                return false;

            dbContext.Lectures.Update(OldLecture);
            dbContext.SaveChanges();
            return true;
        }
    }
}
