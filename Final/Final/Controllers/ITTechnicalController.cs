using Final.ITTechnicalModels;
using Final.Models;
using Final.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Final.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ITTechnicalController : ControllerBase
    {
        private readonly IITTecnicalServices iTTecnicalServices;

        public ITTechnicalController(IITTecnicalServices _iTTecnicalServices)
        {
            iTTecnicalServices = _iTTecnicalServices;
        }

        [HttpGet("GetLaboratoriesWithDevices")]
        public async Task<IActionResult> GetLaboratoriesWithDevices()
        {
            List<LabDevicesDto> laboratoriesWithDevices = new List<LabDevicesDto>();

            var laboratories = await iTTecnicalServices.AllLaboratories();

            foreach (var lab in laboratories)
            {
                Device FirstdPcDevice = await iTTecnicalServices.GetFirstPCInLab(lab.LabId);

                if (FirstdPcDevice is null)
                {
                    LabDevicesDto labDevicesDto = new LabDevicesDto
                    {
                        LabName = lab.LabName,
                        Devices = null,
                        DeviceSpecifications = null
                    };
                    laboratoriesWithDevices.Add(labDevicesDto);
                }
                else
                {
                    LabDevicesDto labDevicesDto = new LabDevicesDto
                    {
                        LabName = lab.LabName,
                        Devices = lab.devices.Select(d => new DeviceDto
                        {
                            DeviceId = d.SerialNumberId,
                            DeviceName = d.DeviceName,
                            DeviceNumber = d.DeviceNumber,
                            Status = d.Status
                        }).ToList(),
                        DeviceSpecifications = new DeviceSpecificationsDto
                        {
                            RAM = FirstdPcDevice.RAM,
                            Processor = FirstdPcDevice.Processor,
                            HardDisk = FirstdPcDevice.HardDisk,
                            Gpu = FirstdPcDevice.Gpu
                        }
                    };

                    laboratoriesWithDevices.Add(labDevicesDto);
                }
            }

            return Ok(laboratoriesWithDevices);
        }

        [HttpGet("GetHallsWithDevices")]
        public async Task<IActionResult> GetHallsWithDevices()
        {
            IQueryable<Hall> halls = await iTTecnicalServices.AlLHalls();


            List<HallDevicesDto> Result = halls.Select(h => new HallDevicesDto
            {
                HallName = h.HallName,
                Devices = h.Devices.Select(d => new DeviceDto
                {
                    DeviceId=d.SerialNumberId,
                    DeviceName = d.DeviceName,
                    DeviceNumber = d.DeviceNumber,
                    Status = d.Status
                }).ToList()
            }).ToList();

            return Ok(Result);
        }


        [HttpGet("GetAllDevices")]
        public async Task<IActionResult> GetAllDevices()
        {
            List<Device> devices = await iTTecnicalServices.GetAllDevices();
            return Ok(devices);
        }

        [HttpPost("FirstPcWithLabID")]
        public async Task<IActionResult> FirstPcWithLabID(string LabId)
        {
            Device device = await iTTecnicalServices.GetFirstPCInLab(LabId);
            return Ok(device);
        }
        [HttpGet("AllITTechnicals")]
        public async Task<IActionResult> AllITTechnicals()
        {
            List<ITTechnical> ITTechnicals =await iTTecnicalServices.GetAll();
            return Ok(ITTechnicals);
        }

        [HttpPost("GetITTechnicalById")]
        public async Task<IActionResult> GetITTechnicalById(string SSS)
        {
            ITTechnical ITTechnical = await iTTecnicalServices.GetById(SSS);
            return Ok(ITTechnical);
        }

        [HttpPut("update-status")]
        public async Task<IActionResult> UpdateDeviceStatus(UpdateDeviceStatus NewDevice)
        {

            Device device = await iTTecnicalServices.GetDeviceWithId(NewDevice.Id);

            if (device == null)
            {
                return NotFound($"Device with ID {NewDevice.Id} not found.");
            }
            iTTecnicalServices.UpdateDeviceStatus(device, NewDevice.NewStatus);

            return Ok($"Device with ID {NewDevice.Id} has been updated with the new status: {NewDevice.NewStatus}.");

        }
    }
}
