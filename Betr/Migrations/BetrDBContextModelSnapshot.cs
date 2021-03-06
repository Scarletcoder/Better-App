﻿// <auto-generated />
using System;
using Betr.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Betr.Migrations
{
    [DbContext(typeof(BetrDBContext))]
    partial class BetrDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Betr.Models.League", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Leagues");
                });

            modelBuilder.Entity("Betr.Models.Match", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("ChanceType");

                    b.Property<DateTime>("Date");

                    b.Property<double>("Draw");

                    b.Property<int?>("LeagueId");

                    b.Property<int>("MatchNoOfTheDay");

                    b.Property<int?>("Team1Id");

                    b.Property<double>("Team1Wins");

                    b.Property<int?>("Team2Id");

                    b.Property<double>("Team2Wins");

                    b.HasKey("Id");

                    b.HasIndex("LeagueId");

                    b.HasIndex("Team1Id");

                    b.HasIndex("Team2Id");

                    b.ToTable("Matches");
                });

            modelBuilder.Entity("Betr.Models.Order", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<DateTime>("OrderDate");

                    b.Property<string>("OrderNumber");

                    b.HasKey("Id");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Betr.Models.OrderItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<double>("Chance");

                    b.Property<int>("ChanceType");

                    b.Property<int>("MatchId");

                    b.Property<int?>("OrderId");

                    b.Property<int>("Stake");

                    b.Property<string>("TeamName");

                    b.HasKey("Id");

                    b.HasIndex("OrderId");

                    b.ToTable("OrderItem");
                });

            modelBuilder.Entity("Betr.Models.Team", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("LeagueId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("LeagueId");

                    b.ToTable("Teams");
                });

            modelBuilder.Entity("Betr.Models.Match", b =>
                {
                    b.HasOne("Betr.Models.League", "League")
                        .WithMany()
                        .HasForeignKey("LeagueId");

                    b.HasOne("Betr.Models.Team", "Team1")
                        .WithMany()
                        .HasForeignKey("Team1Id");

                    b.HasOne("Betr.Models.Team", "Team2")
                        .WithMany()
                        .HasForeignKey("Team2Id");
                });

            modelBuilder.Entity("Betr.Models.OrderItem", b =>
                {
                    b.HasOne("Betr.Models.Order", "Order")
                        .WithMany("Items")
                        .HasForeignKey("OrderId");
                });

            modelBuilder.Entity("Betr.Models.Team", b =>
                {
                    b.HasOne("Betr.Models.League", "League")
                        .WithMany()
                        .HasForeignKey("LeagueId");
                });
#pragma warning restore 612, 618
        }
    }
}
