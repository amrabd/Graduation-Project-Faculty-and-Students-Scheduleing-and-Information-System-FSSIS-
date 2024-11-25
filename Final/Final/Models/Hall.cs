using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class Hall
    {
        [Key]
        public string HallID { get; set; } // 1,2,3

        public string HallName { get; set; } // 1,2,3

        [AllowNull]
        public string? BuildingName { get; set; }

        [AllowNull]
        public string? ITTechnicalId { get; set; }
        [ForeignKey("ITTechnicalId")]
        public ITTechnical ITTechnical { get; set; }

        public List<Device> Devices { get; set; }
        public List<Lecture> Lectures { get; set; }

    }
}
