//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using AutoMapper;
//using Betr.Models;
//using Betr.ViewModels;
//using Betr.Data;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Logging;
//using Microsoft.EntityFrameworkCore;

//namespace Betr.Controllers
//{
//    [Route("api/[Controller]")]
//    public class OrdersController : Controller
//    {
//        private readonly IMapper _mapper;
//        private readonly BetrDBContext _context;

//        public OrdersController(
//          BetrDBContext ctx,
//          IMapper mapper)
//        {
//            _context = ctx;
//            _mapper = mapper;
//        }

//        [HttpGet]
//        public IActionResult Get()
//        {
//            try
//            {
//                var results = _context.Orders.Include(p => p.Items)
//                   .ThenInclude(i => i.Chance)
//                   .Include(o => o.Items)
//                   .ThenInclude(j => j.Match)
//                   .ThenInclude(u => u.MatchNoOfTheDay)
//                   .ToList();

//                return Ok(_mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(results));
//            }
//            catch (Exception ex)
//            {
//                return BadRequest("Failed to get orders");
//            }
//        }

//        [HttpGet("{id:int}")]
//        public IActionResult Get(int id)
//        {
//            try
//            {
//                var order = _context.Orders
//                    .Where(l => l.Id == id)
//                    .Include(p => p.Items)
//                   .ThenInclude(i => i.Chance)
//                   .Include(o => o.Items)
//                   .ThenInclude(j => j.Match)
//                   .ThenInclude(u => u.MatchNoOfTheDay)
//                   .FirstOrDefault();

//                if (order != null) return Ok(_mapper.Map<Order, OrderViewModel>(order));
//                else return NotFound();
//            }
//            catch (Exception ex)
//            {
//                return BadRequest("Failed to get orders");
//            }
//        }
        

//        [HttpPost]
//        public async Task<IActionResult> Post([FromBody]OrderViewModel model, double chance=0.0)
//        {
//            //add it to the db
//            try
//            {
//                if (ModelState.IsValid)
//                {
//                    var newOrder = _mapper.Map<OrderViewModel, Order>(model);

//                    foreach (var item in newOrder.Items)
//                    {
//                        item.Match = _context.Matches.Find(item.Match.Id);
//                        item.Chance = chance;
//                    }

//                    _context.Add(newOrder);
//                    if (_context.SaveChanges() > 0)
//                    {
//                        return Created($"/api/orders/{newOrder.Id}", _mapper.Map<Order, OrderViewModel>(newOrder));
//                    }
//                }
//                else
//                {
//                    return BadRequest(ModelState);
//                }
//            }
//            catch (Exception ex)
//            {

//            }

//            return BadRequest("Failed to save new order");
//        }

//    }
//}
