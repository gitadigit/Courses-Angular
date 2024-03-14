using Api_Courses.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api_Courses.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly DataContext _dataContext = new DataContext();

        public UserController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        // GET: api/<UserController>
        [HttpGet]
        public List<User> Get()
        {
            return _dataContext.Users;
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public User Get(int id)
        {

            var userId = _dataContext.Users.Find(u => u.Id == id);
            if(userId is null)
                return null;
            return userId;
        }

        // POST api/<UserController>
        [HttpPost]
        public string Post([FromBody] User value)
        {
            _dataContext.Users.Add(value);
            return "Post sucssed";
        }

        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] User value)
        {
            var userId = _dataContext.Users.Find(u => u.Id == id);

            userId.Name = value.Name;
            userId.Adress= value.Adress;
            userId.Email= value.Email;
            userId.Password= value.Password;
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var userId = _dataContext.Users.Find(u => u.Id == id);
            _dataContext.Users.Remove(userId);
        }
    }
}
