using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Betr.Models;
using Betr.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Betr.Controllers
{
    public class FootballController : Controller
    {
        private readonly BetrDBContext BetrDBContext;

        public FootballController(BetrDBContext BetrDBContext)
        {
            this.BetrDBContext = BetrDBContext;
        }
        public IActionResult Leagues()
        {
            return View();
        }

        public IActionResult Matches(int id =1)
        {
            return View();
        }
    }
}
