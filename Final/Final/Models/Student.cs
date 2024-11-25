using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class Student
    {
        [Key]
        public string SSN { get; set; }

        public string FullName { get; set; }

        public int Level { get; set; }

        public int Section { get; set; }

        public string Password { get; set; }

        public string Nationality { get; set; }

        public string AcademicMail { get; set; }

        public string Gender { get; set; }

        public DateTime BOD { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public double GPA { get; set; }

        public int? GroupNumber { get; set; }

        public string? DeptId { get; set; }
        [ForeignKey("DeptId")]
        public Department Department { get; set; }

        public List<Enrollment> Enrollments { get; set; }
    }
}
