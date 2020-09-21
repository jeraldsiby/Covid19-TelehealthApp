using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class TeleHealthDbContext: DbContext
    {
        public TeleHealthDbContext(DbContextOptions<TeleHealthDbContext> options)
           : base(options)
        {
        }

        public DbSet<Customer> Customers { get; set; }
    }
}
