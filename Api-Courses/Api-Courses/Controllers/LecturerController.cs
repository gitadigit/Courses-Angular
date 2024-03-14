using Api_Courses.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api_Courses.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LecturerController : ControllerBase
    {

        private readonly DataContext _dataContext = new DataContext();

        public LecturerController (DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        // GET: api/<LecturerController>
        [HttpGet]
        public IEnumerable<Lecturer> Get()
        {
            return _dataContext.lecturers;
        }

        // GET api/<LecturerController>/5
        [HttpGet("{id}")]
        public Lecturer Get(int id)
        {
            var lecturerId = _dataContext.lecturers.Find(u => u.Id == id);
            if (lecturerId is null)
                return null;
            return lecturerId;
        }

        // POST api/<LecturerController>
        [HttpPost]
        public void Post([FromBody] Lecturer value)
        {
            _dataContext.lecturers.Add(value);
            return;
        }

        // PUT api/<LecturerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Lecturer value)
        {
            var lecturerId = _dataContext.lecturers.Find(u => u.Id == id);
            if(lecturerId is not null)
            {
                lecturerId.Name = value.Name;
                lecturerId.Adress = value.Adress;
                lecturerId.Email = value.Email;
                lecturerId.Password = value.Password;

            }

          
        }

        // DELETE api/<LecturerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var userId = _dataContext.lecturers.Find(u => u.Id == id);
            _dataContext.lecturers.Remove(userId);
        }
    }
}
