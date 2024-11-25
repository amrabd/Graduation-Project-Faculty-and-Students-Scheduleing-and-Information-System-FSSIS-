using Final.Models;

namespace Final.Services
{
    public interface IDepartmentServices
    {
        Task<Department> GetByID(string Id);
    }
}
