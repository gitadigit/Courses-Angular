using Api_Courses.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api_Courses.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoursesController : ControllerBase
    {

        private readonly DataContext _dataContext = new DataContext();

        public CoursesController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        // GET: api/<CoursesController>
        [HttpGet]
        public List<Courses> Get()
        {
            return _dataContext.Courses;
        }

        // GET api/<CoursesController>/5
        [HttpGet("{id}")]
        public Courses Get(int id)
        {
            var coursId = _dataContext.Courses.Find(u => u.Id == id);
            if (coursId is not null)
                return coursId;
            return null;
        }

        // POST api/<CoursesController>
        [HttpPost]
        public void Post([FromBody] Courses courses)
        {
            _dataContext.Courses.Add(courses);
        }

        // PUT api/<CoursesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Courses courses)
        {
            var coursId = _dataContext.Courses.Find(u => u.Id == id);
            if (coursId is not null)
            {
                coursId.Name = courses.Name;
                coursId.StartDate = courses.StartDate;
                coursId.AmountLesson = courses.AmountLesson;
                coursId.Image = courses.Image;
                coursId.CategoryId = courses.CategoryId;
                coursId.LectuerId = courses.CategoryId;
                coursId.Image = courses.Image;
                coursId.WayLearning = courses.WayLearning;
                coursId.Syllabus = courses.Syllabus;




            }

        }

        // DELETE api/<CoursesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var coursId = _dataContext.Courses.Find(u => u.Id == id);
            _dataContext.Courses.Remove(coursId);
        }
    }
}
