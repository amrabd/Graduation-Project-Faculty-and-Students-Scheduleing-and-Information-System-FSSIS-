namespace Final.TeachingStaffModels
{
    public class UserSchedule
    {
        public string TeachingStaffName { get; set; }
       
        public string CourseName { get; set; }
        
        public string Day { get; set; }

        public int StartTime { get; set; }
        
        public int Duration { get; set; }

        public int Year { get; set; }

        public string Location { get; set; }

        public int? Section { get; set; }

        public int? GroupNumber { get; set; }

        public string? DepartmentName { get; set; }
        
    }
}
