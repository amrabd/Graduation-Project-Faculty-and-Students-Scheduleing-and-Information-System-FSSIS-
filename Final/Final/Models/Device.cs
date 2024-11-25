using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Final.Models
{
    public class Device
    {
        [Key]
        public string SerialNumberId { get; set; }

        public string? DeviceName { get; set; } // projector or computer or تكييف

        public string? Model { get; set; }

        public string? Status { get; set; }

        public int? DeviceNumber { get; set; }

        public int? RAM { get; set; }

        public string? Processor { get; set; }

        public string? HardDisk { get; set; }

        public string? Gpu { get; set; }

        public string? HallID { get; set; }
        [ForeignKey("HallID")]
        public Hall? Hall { get; set; }

        public string? LaboratoryId { get; set; }
        [ForeignKey("LaboratoryId")]
        public Laboratory? Laboratory { get; set; }

    }
}
