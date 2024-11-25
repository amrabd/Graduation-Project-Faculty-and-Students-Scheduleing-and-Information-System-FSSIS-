using Final.courseModels;
using Final.Models;
using Microsoft.EntityFrameworkCore;

namespace Final.CourseModels
{
    public class GetPreCourses
    {
        public List<string> GetPrerequesets(string CourseId,List<Prerequeset> DT0, List<Course> DT1)
        {
            List<Prerequeset> Result = DT0.Where(p => p.CourseId == CourseId).ToList();
            List<string> courses = new List<string>();
            foreach (Prerequeset p in Result)
            {
                Course course = DT1.FirstOrDefault(s => s.CourseId == p.PrerequesetId);
                if (course != null)
                    courses.Add(course.CourseName);
            }
            return courses;
        }

        public List<CourseData> CoursesDataForL12(List<Prerequeset> DT0,List<Course> DT1,string Term,int level)
        {
            return DT1.Where(c => c.TermType == Term && c.Year == level).Select(s => new CourseData
            {
                CourseName = s.CourseName,
                Prerequesetcourse = GetPrerequesets(s.CourseId,DT0,DT1)
            }).ToList();
        }

        public List<CourseData> CoursesDataForL34(
            List<Prerequeset> DT0, 
            List<Course> DT1,
            List<Course_Department> course_Departments,
            string Term, int level,string DeptId)
        {
            List<Course_Department> courses_for_DeptId = course_Departments.Where(s => s.Dept_id == DeptId).ToList();

            List<CourseData> Result = new List<CourseData>();

            foreach(Course_Department course0 in courses_for_DeptId)
            {
                Course course = DT1.SingleOrDefault(c => c.CourseId == course0.Course_id);
                if (course == null)
                    continue;
                if(course.Year == level && course.TermType == Term)
                {
                    Result.Add(new CourseData
                    {
                        CourseName = course.CourseName,
                        Prerequesetcourse = GetPrerequesets(course.CourseId, DT0, DT1)
                    });
                }
            }
            return Result;
        }
    }
}
