using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Models
{
    public class Customer : IEntity
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Email { get; set; }
        public string Address { get; set; }
        public string PostalCode { get; set; }
        public DateTime Date { get; set; }
        public string Response { get; set; }
    }
}
