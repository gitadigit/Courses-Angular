namespace Api_Courses.Entities
{
    public class Lecturer
    {
        public static int LectureId = 1000;

        public int Id { get; set; }
        
        public string Name { get; set; }
        
        public string Adress { get; set; }
        
        public string Email { get; set; }
        
        public string Password { get; set; }

        public Lecturer()
        {
            this.Id = LectureId++;
        }
    }
}
