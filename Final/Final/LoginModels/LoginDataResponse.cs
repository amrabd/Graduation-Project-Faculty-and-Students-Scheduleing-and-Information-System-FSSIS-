using Final.TeachingStaffModels;

namespace Final.LoginModels
{
    public class LoginDataResponse
    {
        public string? Message { get; set; }
        public bool IsAuthonticated { get; set; }
        public string UserName { get; set; }
        public string Token { get; set; }
        public DateTime? ExpiresOn { get; set; }
        public string Role { get; set; }
        public string? Picture { get; set; }
        public List<UserSchedule>? schedule {  get; set; } 
    }
}
