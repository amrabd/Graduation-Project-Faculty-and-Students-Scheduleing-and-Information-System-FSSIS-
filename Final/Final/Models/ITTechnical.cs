using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class ITTechnical
    {
        [Key]
        public string SSN { get; set; }
        
        public string FullName { get; set; }

        public string Password { get; set; }

        [AllowNull]
        public string Gender { get; set; }

        [AllowNull]
        public string PhoneNumber { get; set; }

        [AllowNull]
        public string Nationality { get; set; }

        [AllowNull]
        public DateTime DateHiring { get; set; }

        [AllowNull]
        public string Degree { get; set; }

        [AllowNull]
        public string JobTitle { get; set; }

        [AllowNull]
        public string OfficeLocation { get; set; }

        [AllowNull]
        public string AcademicMail { get; set; }

        [AllowNull]
        public DateTime BOD { get; set; }

        public List<Hall> Halls { get; set; }
        public List<Laboratory> Laboratories { get; set; }
    }
}
