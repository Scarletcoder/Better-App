using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Betr.Models
{
    public class OrderItem
    {
        [Key]
        public int Id { get; set; }
        public int MatchId { get; set; }
        public double Chance { get; set; }
        public int ChanceType { get; set; }
        public int Stake { get; set; }
        public string TeamName { get; set; }
        public Order Order { get; set; }
    }
}