using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Betr.Models;

namespace Betr.Models
{
    public class BetrDBContext : DbContext
    {
        public BetrDBContext(DbContextOptions<BetrDBContext> options) : base(options)
        {
        }
        public DbSet<Match> Matches { get; set; }
        public DbSet<League> Leagues { get; set; }
        public DbSet<Team> Teams { get; set; }

        public double GRN(double minimum, double maximum)
        {
            Random random = new Random();
            return random.NextDouble() * (maximum - minimum) + minimum;
        }

        public DbSet<Betr.Models.OrderItem> OrderItem { get; set; }
        public DbSet<Order> Orders { get; set; }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{

        //    modelBuilder.Entity<Team>().HasData(
        //        new Team { Id = 1, Name = "Team A", LeagueId = 1 },
        //        new Team { Id = 2, Name = "Team B", LeagueId = 1 },
        //        new Team { Id = 3, Name = "Team C", LeagueId = 1 },
        //        new Team { Id = 4, Name = "Team D", LeagueId = 1 },
        //        new Team { Id = 5, Name = "Team E", LeagueId = 1 },
        //        new Team { Id = 6, Name = "Team F", LeagueId = 1 },
        //        new Team { Id = 7, Name = "Team G", LeagueId = 1 },
        //        new Team { Id = 8, Name = "Team H", LeagueId = 1 },
        //        new Team { Id = 9, Name = "Team I", LeagueId = 1 },
        //        new Team { Id = 10, Name = "Team J", LeagueId = 1 }
        //    );

        //    //modelBuilder.Entity<League>().asdata(
        //    //    new league { id = 1, name = "league a" }
        //    //    );
        //    modelBuilder.Entity<Match>().HasData(
        //        new Match() { LeagueID = 1, Id = 1, Team1 = , matchnooftheday = 1, team1wins = grn(0.1, 20.0), team2wins = grn(0.1, 20.0), draw = grn(0.1, 20.0) },
        //        new Match { LeagueID = 1, Id = 2, Team1 = , matchnooftheday = 2, team1wins = grn(0.1, 20.0), team2wins = grn(0.1, 20.0), draw = grn(0.1, 20.0) },
        //        new Match { LeagueID = 1, Id = 3, Team1 = , matchnooftheday = 3, team1wins = grn(0.1, 20.0), team2wins = grn(0.1, 20.0), draw = grn(0.1, 20.0) },
        //        new Match { LeagueID = 1, Id = 4, Team1 = , matchnooftheday = 4, team1wins = grn(0.1, 20.0), team2wins = grn(0.1, 20.0), draw = grn(0.1, 20.0) },
        //        new Match { LeagueID = 1, Id = 5, Team1 = , matchnooftheday = 5, team1wins = grn(0.1, 20.0), team2wins = grn(0.1, 20.0), draw = grn(0.1, 20.0) }
        //    );

        //    modelBuilder.Entity<League>().HasData(
        //       new League
        //       {
        //           Id = 1,
        //           Name = "league 1",
        //       });




        //    //}
        //}
    }
}
