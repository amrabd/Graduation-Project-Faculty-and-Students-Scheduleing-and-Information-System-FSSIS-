using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class Laboratory
    {
        [Key]
        public string LabId { get; set; } 

        public string? LabName { get; set; } // 0أ

        [AllowNull]
        public string? ITTechnicalId { get; set; }
        [ForeignKey("ITTechnicalId")]
        public ITTechnical ITTechnical { get; set; }


        public List <Device> devices { get; set; }
        public List <Class> Classes { get; set; }
    }
}
