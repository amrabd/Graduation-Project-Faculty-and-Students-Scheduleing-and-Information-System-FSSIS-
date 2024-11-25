using Microsoft.EntityFrameworkCore;

namespace Final.Models
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<Class>Classes  { get; set; }
        public DbSet<Course>Courses  { get; set; }
        public DbSet<Department>Departments  { get; set; }
        public DbSet<Device>Devices  { get; set; }
        public DbSet<Enrollment>Enrollments  { get; set; }
        public DbSet<GeneralDepartment>GeneralDepartments  { get; set; }
        public DbSet<Hall>Halls  { get; set; }
        public DbSet<ITTechnical>iTTechnicals  { get; set; }
        public DbSet<Laboratory>Laboratories  { get; set; }
        public DbSet<Lecture>Lectures  { get; set; }
        public DbSet<Prerequeset>Prerequesets  { get; set; }
        public DbSet<Semester>Semesters  { get; set; }
        public DbSet<Student>Students  { get; set; }
        public DbSet<TeachingStaff>TeachingStaffs  { get; set; }
        public DbSet<Course_Department>Course_Department  { get; set; }
    }
}
