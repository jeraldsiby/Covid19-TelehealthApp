using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : BaseController<Customer,EfCoreCustomerRepository>
    {
        public CustomerController(EfCoreCustomerRepository repository): base(repository)
        {
           
        }
    }
}
