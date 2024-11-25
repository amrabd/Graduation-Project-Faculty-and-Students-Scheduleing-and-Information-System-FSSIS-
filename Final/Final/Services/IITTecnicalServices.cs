using Final.Models;

namespace Final.Services
{
    public interface IITTecnicalServices
    {
        Task<List<ITTechnical>> GetAll();
        Task<List<Device>> GetAllDevices();
        Task<List<Laboratory>> AllLaboratories();
        Task<IQueryable<Hall>> AlLHalls();
        Task<ITTechnical> GetById(String SSN);
        Task<Device> GetFirstPCInLab(String LabID);
        Task<Device> GetDeviceWithId(String DeviceID);
        void UpdateDeviceStatus(Device device,string NewStatus);
        bool ISITTechnical(String SSN);

    }
}
