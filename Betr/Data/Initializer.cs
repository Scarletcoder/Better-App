using Betr.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Betr.Data
{
    public class Initializer
    {
        private static BetrDBContext _betrDBContext;

        public static async Task Initialize(
            BetrDBContext betrDbContext)
        {
            _betrDBContext = betrDbContext;
            betrDbContext.Database.EnsureCreated();

            League league = new Bogus.Faker<League>()
                .RuleFor<string>(o => o.Name, f => f.Name.FirstName());

            List<Team> teams = new List<Team>();


            for (int i = 0; i < 10; i++)
            {
                Team team = new Bogus.Faker<Team>()
                    .RuleFor<string>(o => o.Name, f => f.Name.FirstName());
                team.League = league;
                teams.Add(team);
            }

            var t = teams;
            for (int i=0; i<5; i++)
            {
                Match match = new Bogus.Faker<Match>()
                    .RuleFor<double>(m => m.Draw, f => Math.Round(f.Random.Double(0, 10),2))
                    .RuleFor<double>(m => m.Team1Wins, f => Math.Round(f.Random.Double(0, 10),2))
                    .RuleFor<double>(m => m.Team2Wins, f => Math.Round(f.Random.Double(0, 10), 2))
                    .RuleFor<DateTime>(m => m.Date, f => f.Date.Recent());
                var k = 2 * i;
                match.Team1 = t[k];
                match.Team2 = t[k+1];
                match.League = league;
                match.MatchNoOfTheDay = i+1;
                Store(match);
            }

            //var alpha = 40;

            //await betrDbContext.SaveChangesAsync();
            
        }
        public static void Store(Match match)
        {
            _betrDBContext.Attach(match);
            _betrDBContext.SaveChanges();
        }


    }
}
