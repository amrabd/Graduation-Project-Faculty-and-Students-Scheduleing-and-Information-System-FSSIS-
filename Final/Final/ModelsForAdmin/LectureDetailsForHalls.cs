namespace Final.ModelsForAdmin
{
    public class LectureDetailsforHalls
    {
        public string LectureID {  get; set; }
        public string Course {  get; set; }
        public string Professor { get; set; }
        public int Duration { get; set; }
        public int Year { get; set; }
        public string? Department { get; set; }
        public int? GroupNumber { get; set; }
        public string Day { get; set; }
        public int Start { get; set; }
        public string HallName { get; set; }
    }
}
