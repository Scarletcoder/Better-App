using System.ComponentModel.DataAnnotations;

namespace Betr.ViewModels
{
  public class OrderItemViewModel
  {
    public int Id { get; set; }
    [Required]
    public double Stake { get; set; }
    [Required]
    public decimal Chance { get; set; }
    public int ChanceType { get; set; }
    [Required]
    public int MatchId { get; set; }
    [Required]
    public string TeamName { get; set; }
    }
}