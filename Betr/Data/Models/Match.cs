using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Betr.Models
{
    public class Match
    {
        [Key]
        public int Id { get; set; } 
        public int MatchNoOfTheDay { get; set; } 
        public DateTime Date { get; set; } 
        public int ChanceType { get; set; }
        public double Team1Wins { get; set; } 
        public double Team2Wins { get; set; } 
        public double Draw { get; set; }
        [ForeignKey("LeagueId")]
        public League League { get; set; }
        [ForeignKey("Team1Id")]
        public virtual Team Team1 { get; set; }
        [ForeignKey("Team2Id")]
        public virtual Team Team2 { get; set; }
    }
}
