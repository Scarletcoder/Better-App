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
    [Route("/api/League")]
    [ApiController]
    [Produces("application/json")]

    public class FootballLeaguesController : Controller
    {
        private readonly BetrDBContext _Db;

        public FootballLeaguesController(BetrDBContext _db)
        {
            _Db = _db;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(GetLeagues());
            }
            catch (Exception ex)
            {
                return BadRequest("Failed to get matches");
            }
        }

        public IEnumerable<League> GetLeagues()
        {
            return _Db.Leagues.ToList();
        }
    }
}
