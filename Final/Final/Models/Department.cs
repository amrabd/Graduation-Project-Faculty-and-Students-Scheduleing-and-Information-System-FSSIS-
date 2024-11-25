using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class Department
    {
        [Key]
        public string DepartmentId { get; set; }
        
        public string? DepartmentName { get; set; }

        [AllowNull]
        public string? GDepartmentID {  get; set; }
        [ForeignKey("GDepartmentID")]
        public GeneralDepartment GeneralDepartment { get; set; }

        public List<Student> Students { get; set; }
        public List<Semester> Semesters { get; set; }
        public List<TeachingStaff> TeachingStaffs { get; set; }
        public List<Class> Classes { get; set; }
        public List<Lecture> Lectures { get; set; }



    }
}
