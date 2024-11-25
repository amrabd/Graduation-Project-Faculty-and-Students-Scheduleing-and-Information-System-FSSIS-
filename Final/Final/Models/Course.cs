using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class Course
    {
        [Key]
        public string CourseId { get; set; }

        public string? CourseName { get; set; }

        public int? Year {  get; set; } // 1,2,3,4

        public string? TermType {  get; set; }

        public string? Description { get; set; }

        public int? CreditHours { get; set; }

        public List<Enrollment> Enrollments { get; set; }
        public List<Prerequeset> prerequisets { get; set; }
        public List<Class> Classes { get; set; }
        public List<Lecture> Lectures { get; set; }

    }
}
