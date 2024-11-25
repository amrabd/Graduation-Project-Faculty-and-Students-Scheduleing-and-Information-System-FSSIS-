using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Final.Models
{
    public class Course_Department
    {
        [Key]
        public string Id { get; set; }

        public string? Dept_id { get; set; }
        [ForeignKey("Dept_id")]
        public Department department { get; set; }

        public string? Course_id { get; set; }
        [ForeignKey("Course_id")]
        public Course course { get; set; }


    }
}
