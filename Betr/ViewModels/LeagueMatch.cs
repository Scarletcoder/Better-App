using Betr.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Betr.ViewModels
{
    public class LeagueMatch
    {
        public int MatchId { get; set; }
        public int MatchNoOfTheDay { get; set; }
        public string Team1Name { get; set; }
        public string Team2Name { get; set; }
        public double Team1Wins { get; set; }
        public double Team2Wins { get; set; }
        public double Draw { get; set; }
        public int Team2Id { get; set; }
        public int Team1Id { get; set; } 
    }
}
