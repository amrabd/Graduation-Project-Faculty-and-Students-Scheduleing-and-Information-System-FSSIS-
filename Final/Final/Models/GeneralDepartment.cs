using System.ComponentModel.DataAnnotations;

namespace Final.Models
{
    public class GeneralDepartment
    {
        [Key]
        public string GDepartmentId { get; set; }

        public string GDepartmentName { get; set; }

        public List<Department> Departments { get; set; }
    }
}
