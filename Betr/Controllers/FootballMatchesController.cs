using Betr.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Web.Http;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Betr.ViewModels;

namespace Betr.Controllers
{
    [Route("api/Match/{id}")]
    [ApiController]
    [Produces("application/json")]

    public class FootballMatchesController : Controller
    {
        private readonly BetrDBContext _Db;

        public FootballMatchesController(BetrDBContext _db)
        {
            _Db = _db;
        }

        [HttpGet]
        public IActionResult Get(int id=1)
        {
            try
            {
                return Ok(GetMatches(id));
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get matches");
            }
        }

        public IEnumerable<LeagueMatch> GetMatches(int id)
        {
            return _Db.Matches
                .Where(r=> r.League.Id == id)
                .OrderBy(r => r.Id).OrderBy(r => r.MatchNoOfTheDay)
                .Select(r => new LeagueMatch
                {
                    MatchId = r.Id,
                    MatchNoOfTheDay = r.MatchNoOfTheDay,
                    Team1Id = r.Team1.Id,
                    Team2Id = r.Team2.Id,
                    Team1Wins = r.Team1Wins,
                    Team2Wins = r.Team2Wins,
                    Draw = r.Draw,
                    Team1Name = _Db.Teams.Where(s => s.Id == r.Team1.Id).First().Name,
                    Team2Name = _Db.Teams.Where(s => s.Id == r.Team2.Id).First().Name,
                }).ToList();
            
        }
    }
}
