using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public interface IRepository<T> where T: class, IEntity
    {
        Task<T> Get(int id);
        Task<List<T>> GetAll();
        Task<T> Add(T entity);
        Task<T> Update(T entityChange);
        Task<T> Delete(int id);
    }
}
