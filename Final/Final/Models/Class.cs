using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class Class
    {
        [Key]
        public string ClassId { get; set; }

        public int Section {  get; set; }

        public string? Day { get; set; }

        public int StartTime { get; set; }

        public int Duration { get; set; }

        public int Year { get; set; }

        [AllowNull]
        public string? TeachingAssistantId { get; set; }
        [ForeignKey("TeachingAssistantId")]
        public TeachingStaff TeachingStaff { get; set; }

        [AllowNull]
        public string? LaboratoryId { get; set; }
        [ForeignKey("LaboratoryId")]
        public Laboratory Laboratory { get; set; }

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
