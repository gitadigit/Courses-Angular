namespace Api_Courses.Entities
{
    public class User
    {
        public static int UserId = 100;

        public int Id { get; set; }
       
        public string Name { get; set; }
        
        public string Adress { get; set; }
        
        public string Email { get; set; }
        
        public string Password { get; set; }

        public User()
        {
            this.Id = UserId++;
        }

    }
}
