using Final.Models;
using Microsoft.EntityFrameworkCore;

namespace Final.Services
{
    public class ITTecnicalServices : IITTecnicalServices
    {
        private readonly ApplicationDbContext dbContext;

        public ITTecnicalServices(ApplicationDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public async Task<IQueryable<Hall>> AlLHalls()
        {
            return dbContext.Halls.Include(h => h.Devices);
        }

        public async Task<List<Laboratory>> AllLaboratories()
        {
            return await dbContext.Laboratories.Include(h => h.devices).ToListAsync();
        }

        public async Task<List<ITTechnical>> GetAll()
        {
            return dbContext.iTTechnicals.ToList();
        }


        public Task<ITTechnical> GetById(string SSN)
        {
            return dbContext.iTTechnicals.SingleOrDefaultAsync(I => I.SSN == SSN);
        }

        public async Task<Device> GetFirstPCInLab(string LabID)
        {
            Device device =await dbContext.Devices
                .FirstOrDefaultAsync(d => d.LaboratoryId == LabID && d.DeviceName == "PC");

            // Handle the case when no device is found
            return device;
        }

        public async Task<List<Device>> GetAllDevices()
        {
            List<Device> devices = await dbContext.Devices.ToListAsync();
            return devices;
        }

        public bool ISITTechnical(string SSN)
        {
            if (dbContext.iTTechnicals.SingleOrDefault(I => I.SSN == SSN) != null)
                return true;
            return false;

        }

        public Task<Device> GetDeviceWithId(string DeviceID)
        {
            return dbContext.Devices.FirstOrDefaultAsync(d => d.SerialNumberId == DeviceID);
        }

        public void UpdateDeviceStatus(Device device, string NewStatus)
        {
            device.Status = NewStatus;
            dbContext.Devices.Update(device);
            dbContext.SaveChanges();
        }
    }
}
