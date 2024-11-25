using Final.Models;
using Final.TeachingStaffModels;

namespace Final.Services
{
    public interface ITeachingStaffServices
    {
        Task<List<TeachingStaff>> GetProfessors();
        Task<List<TeachingStaff>> GetTAs();
        bool IsTeachingStaff(String SSN);
        Task<TeachingStaff> GetById(String SSN);
        Task<List<UserSchedule>> ProfessorSchedule(String SSN);
        Task<List<UserSchedule>> TASchedule(String SSN);
    }
}
