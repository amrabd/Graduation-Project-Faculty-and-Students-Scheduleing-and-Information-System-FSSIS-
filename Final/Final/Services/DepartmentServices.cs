using Final.Models;

namespace Final.Services
{
    public class DepartmentServices : IDepartmentServices
    {
        private readonly ApplicationDbContext dbContext;

        public DepartmentServices(ApplicationDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        public async Task<Department> GetByID(string Id)
        {
            if (Id == null)
                return null;
            Department department = dbContext.Departments.FirstOrDefault(d => d.DepartmentId == Id);
            return department;
        }
    }
}
