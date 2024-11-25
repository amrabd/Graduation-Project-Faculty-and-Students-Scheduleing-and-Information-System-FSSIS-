namespace Final.ModelsForAdmin
{
    public class UpdateClassDetails
    {
        public string ClassId {  get; set; }
        public string Course {  get; set; }
        public string Ta { get; set; }
        public int Duration { get; set; }
        public int Year { get; set; }
        public string? Department { get; set; }
        public int Section { get; set; }
    }
}
