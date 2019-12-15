using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Betr.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }
        public ICollection<OrderItem> Items { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderNumber { get; set; }
    }
}
