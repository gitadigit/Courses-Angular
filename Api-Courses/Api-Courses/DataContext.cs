using Api_Courses.Entities;

namespace Api_Courses
{
    public class DataContext
    {


        public List<User> Users { get; set; }

        public List<Category> Categories { get; set; }

        public List<Lecturer> lecturers { get; set; }

        public List<Courses> Courses { get; set; }

        public DataContext()
        {
            Users = new List<User>
            {
                new User{ Name="Ethan", Adress="First Street", Email="ethan@email.com", Password="Ethan123"},
                new User{ Name="Noah", Adress="Second Street", Email="noah@email.com", Password="Noah456"},
                new User{ Name="Oliver", Adress="Third Street", Email="oliver@email.com", Password="Oliver789"},
                new User{ Name="Liam", Adress="Fourth Street", Email="liam@email.com", Password="Liam987"},
                new User{ Name="Mason", Adress="Fifth Street", Email="mason@email.com", Password="Mason654" },
                new User{ Name="Lucas", Adress="Sixth Street", Email="lucas@email.com", Password="Lucas321"}
            };

            Categories = new List<Category>
            {
                new Category{Name="Angular", Routing="D:\\שנה ב\\Angular\\Courses-Project\\Images\\imgemail"},
                new Category{Name="React", Routing="D:\\שנה ב\\React\\Courses-Project\\Images\\imgreact"},
                new Category{Name="UI/UX", Routing="D:\\שנה ב\\UIUX\\Courses-Project\\Images\\imguiux"},
                new Category{Name="Graphic Design", Routing="D:\\שנה ב\\GraphicDesign\\Courses-Project\\Images\\imgdesign"},
                new Category{Name="Python", Routing="D:\\שנה ב\\Python\\Courses-Project\\Images\\imgpython"},
                new Category{Name="Machine Learning", Routing="D:\\שנה ב\\ML\\Courses-Project\\Images\\imgml"},
                new Category{Name="Node.js", Routing="D:\\שנה ב\\Node.js\\Courses-Project\\Images\\imgnode"},
                new Category{Name="Java Spring", Routing="D:\\שנה ב\\JavaSpring\\Courses-Project\\Images\\imgjava"},



            };

            lecturers = new List<Lecturer>
            {
                new Lecturer{Name="David", Adress="Harishonim", Email="1001@gmail.com", Password="C101"},
                new Lecturer{Name="Jonathan", Adress="Shenitim", Email="1002@gmail.com", Password="C102"},
                new Lecturer{Name="Michael", Adress="Shelishi", Email="1003@gmail.com", Password="C103"},
                new Lecturer{Name="Benjamin", Adress="Revi'i", Email="1004@gmail.com", Password="C104"},
                new Lecturer{Name="Adam", Adress="Chamishi", Email="1005@gmail.com", Password="C105"},
            };

            Courses = new List<Courses>
            {
                new Courses{AmountLesson=70, Image="/assets/courses/12.jpg", CategoryId=1, LectuerId=1000, Name="Advanced Angular Development", StartDate=new DateTime(2024, 3, 15), Syllabus=new List<string>{"Angular Services", "RxJS", "Angular Material"}, WayLearning=WayLearning.Zoom },
                new Courses{AmountLesson=80, Image="/assets/courses/13.jpg", CategoryId=3, LectuerId=1001, Name="Data Science Fundamentals", StartDate=new DateTime(2024, 3, 20), Syllabus=new List<string>{"Python Basics", "Data Visualization", "Statistical Analysis"}, WayLearning=WayLearning.Frontal },
                new Courses{AmountLesson=60, Image="/assets/courses/16.webp", CategoryId=8, LectuerId=1003, Name="Java Spring Boot Mastery", StartDate=new DateTime(2024, 3, 25), Syllabus=new List<string>{"Spring Boot Basics", "RESTful APIs", "Database Integration"}, WayLearning=WayLearning.Frontal },
                new Courses{AmountLesson=20, Image="/assets/courses/15.jpg", CategoryId=6, LectuerId=1002, Name="Introduction to Machine Learning", StartDate=new DateTime(2024, 4, 1), Syllabus=new List<string>{"Basic Algorithms", "Supervised Learning", "Unsupervised Learning"}, WayLearning=WayLearning.Zoom },
                new Courses{AmountLesson=10, Image="/assets/courses/17.jpg", CategoryId=3, LectuerId=1001, Name="UI/UX Design Principles", StartDate=new DateTime(2024, 4, 5), Syllabus=new List<string>{"User-Centered Design", "Prototyping", "Usability Testing"}, WayLearning=WayLearning.Zoom },
                new Courses{AmountLesson=90, Image="/assets/courses/18.webp", CategoryId=5, LectuerId=1005, Name="Python for Beginners", StartDate=new DateTime(2024, 4, 10), Syllabus=new List<string>{"Python Syntax", "Data Types", "Control Flow"}, WayLearning=WayLearning.Zoom },
                new Courses{AmountLesson=30, Image="/assets/courses/19.webp", CategoryId=2, LectuerId=1004, Name="React Hooks and Advanced Patterns", StartDate=new DateTime(2024, 4, 15), Syllabus=new List<string>{"React Hooks", "State Management", "Testing in React"}, WayLearning=WayLearning.Frontal }

            };
        }

    }
}
