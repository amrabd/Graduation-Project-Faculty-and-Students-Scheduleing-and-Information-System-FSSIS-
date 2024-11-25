namespace Final.ITTechnicalModels
{
    public class LabDevicesDto
    {
        public string? LabName { get; set; }
        public List<DeviceDto>? Devices { get; set; } = new List<DeviceDto>();
        public DeviceSpecificationsDto? DeviceSpecifications { get; set; }
    }
}
