using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class Lecture
    {
        [Key]
        public string LectureId { get; set; }

        public string Day {  get; set; }
        // 8:18
        public int StartTime { get; set; }
        
        public int Duration { get; set; }

        [AllowNull]
        public int? GroupNumber { get; set; }

        public int Year { get; set; }


        [AllowNull]
        public string? ProfessorId { get; set; }
        [ForeignKey("ProfessorId")]
        public TeachingStaff TeachingStaff { get; set; }

        [AllowNull]
        public string? HallId { get; set; }
        [ForeignKey("HallId")]
        public Hall Hall { get; set; }

        [AllowNull]
        public string? CourseId { get; set; }
        [ForeignKey("CourseId")]
        public Course Course { get; set; }

        [AllowNull]
        public string? DeptId { get; set; }
        [ForeignKey("DeptId")]
        public Department Department { get; set; }
    }
}
