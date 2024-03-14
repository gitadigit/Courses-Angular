using Api_Courses.Entities;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api_Courses.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {

        

        private readonly DataContext _dataContext = new DataContext();

        public CategoryController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }


        // GET: api/<CategoryController>
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return _dataContext.Categories;
        }

        // GET api/<CategoryController>/5
        [HttpGet("{id}")]
        public Category Get(int id)
        {
            var categoryId = _dataContext.Categories.Find(u => u.Id == id);
            if(categoryId is null)
                return null;
            return categoryId;
        }

        // POST api/<CategoryController>
        [HttpPost]
        public void Post([FromBody] Category value)
        {
            _dataContext.Categories.Add(value);
            return;
        }

        // PUT api/<CategoryController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Category value)
        {
            var categoryId = _dataContext.Categories.Find(u => u.Id == id);
            if (categoryId is not null)
            {
                categoryId.Name = value.Name;
                categoryId.Routing = value.Routing;
            }
        }

        // DELETE api/<CategoryController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var categoryId = _dataContext.Categories.Find(u => u.Id == id);
            _dataContext.Categories.Remove(categoryId);
        }
    }
}
