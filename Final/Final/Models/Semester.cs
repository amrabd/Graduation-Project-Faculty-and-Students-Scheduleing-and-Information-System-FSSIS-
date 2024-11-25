using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class Semester
    {
        [Key]
        public string SemesterId { get; set; }

        public string? GoogleDrive { get; set; }

        public int? Level { get; set; }

        public string? TermType { get; set; }

        public int? AcademicYear { get; set; }

        public string? DeptId { get; set; }
        [ForeignKey("DeptId")]
        public Department? Department { get; set; }
    }
}
