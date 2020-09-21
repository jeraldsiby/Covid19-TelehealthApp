using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public abstract class BaseController<TEntity,TRepository> : ControllerBase
        where TEntity: class, IEntity
        where TRepository: IRepository<TEntity>
    {
        private readonly TRepository repository;

        public BaseController(TRepository repository)
        {
            this.repository = repository;
        }

        // GET: api/[controller]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TEntity>>> Get()
        {
            return await repository.GetAll();
        }

        // GET: api/[controller]/5
        [HttpGet("{id}")]
        public async Task<ActionResult<TEntity>> Get(int id)
        {
            var customer = await repository.Get(id);
            if (customer == null)
            {
                return NotFound();
            }
            return customer;
        }

        // PUT: api/[controller]/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, TEntity customer)
        {
            if (id != customer.Id)
            {
                return BadRequest();
            }
            await repository.Update(customer);
            return NoContent();
        }

        // POST: api/[controller]
        [HttpPost]
        public async Task<ActionResult<TEntity>> Post(TEntity customer)
        {
            await repository.Add(customer);
            return CreatedAtAction("Get", new { id = customer.Id }, customer);
        }

        // DELETE: api/[controller]/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<TEntity>> Delete(int id)
        {
            var customer = await repository.Delete(id);
            if (customer == null)
            {
                return NotFound();
            }
            return customer;
        }
    }
}
