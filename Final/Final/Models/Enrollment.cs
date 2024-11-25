using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class Enrollment
    {
        [Key]
        public string EnrollmentId { get; set; }

        [AllowNull]
        public string StudentId { get; set; }
        [ForeignKey("StudentId")]
        public Student Student { get; set; }

        [AllowNull]
        public string CourseId { get; set; }
        [ForeignKey("CourseId")]
        public Course Course { get; set; }
    }
}
