using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class EfCoreCustomerRepository:EfCoreRepository<Customer,TeleHealthDbContext>
    {
        public EfCoreCustomerRepository(TeleHealthDbContext context): base(context)
        {

        }
        //add methods that are specific to the Customer Repository
    }
}
