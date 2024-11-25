using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class TeachingStaff
    {
        // Admin or not property
        [Key]
        public string SSN { get; set; }

        public string? FullName { get; set; }

        [AllowNull]
        public string? PhoneNumber { get; set; }

        public string? Discription { get; set; }

        [AllowNull]
        public string? FacebookLink { get; set; }

        [AllowNull]
        public string? GithubLink { get; set; }

        [AllowNull]
        public string? LinkedInLink { get; set; }

        [AllowNull]
        public string? AcadimicMailLink { get; set; }
        
        // ~/
        public string? Picture { get; set; }

        public bool? IsHeadOfDepartment { get; set; }

        public string? Password { get; set; }

        [AllowNull]
        public string? Gender { get; set; }

        [AllowNull]
        public DateTime? DateHiring { get; set; }

        [AllowNull]
        public string? Nationality { get; set; }

        [AllowNull]
        public DateTime? BirthDate { get; set; }

        [AllowNull]
        public DateTime? GraduationDate { get; set; }

        public string? Degree { get; set; }

        public string? Type { get; set; }  // prof ,TA admin , TA

        [AllowNull]
        public string? OfficeLocation { get; set; }

        [AllowNull]
        public string? DeptId { get; set; }
        [ForeignKey("DeptId")]
        public Department Department { get; set; }

        public List<Class> Classes { get; set; }
        public List<Lecture> lectures { get; set; }
    }
}