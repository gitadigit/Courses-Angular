namespace Api_Courses.Entities
{
    public class Category
    {
        public static int CategoryId = 1;

        public int Id { get; set; }

        public string Name { get; set; }

        public string Routing { get; set; }


        public Category()
        {
            this.Id = CategoryId++;
        }
    }
}
