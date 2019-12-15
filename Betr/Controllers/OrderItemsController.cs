////using System;
////using System.Collections.Generic;
////using System.Linq;
////using System.Threading.Tasks;
////using Microsoft.AspNetCore.Http;
////using Microsoft.AspNetCore.Mvc;
////using Microsoft.EntityFrameworkCore;
////using Betr.Models;
////using AutoMapper;

////namespace Betr.Controllers
////{
////    [Route("/api/Order")]
////    public class OrderItemsController : ControllerBase
////    {
////        private readonly BetrDBContext _context;

////        public OrderItemsController(BetrDBContext context)
////        {
////            _context = context;
////        }

////        // GET: api/OrderItems
////        [HttpGet]
////        public async Task<ActionResult<IEnumerable<OrderItem>>> GetOrderItem()
////        {
////            return await _context.OrderItem.ToListAsync();
////        }

////        // GET: api/OrderItems/5
////        [HttpGet("{id}")]
////        public async Task<ActionResult<OrderItem>> GetOrderItem(int id)
////        {
////            var orderItem = await _context.OrderItem.FindAsync(id);

////            if (orderItem == null)
////            {
////                return NotFound();
////            }

////            return orderItem;
////        }

////        // PUT: api/OrderItems/5
////        [HttpPut("{id}")]
////        public async Task<IActionResult> PutOrderItem(int id, OrderItem orderItem)
////        {
////            if (id != orderItem.Id)
////            {
////                return BadRequest();
////            }

////            _context.Entry(orderItem).State = EntityState.Modified;

////            try
////            {
////                await _context.SaveChangesAsync();
////            }
////            catch (DbUpdateConcurrencyException)
////            {
////                if (!OrderItemExists(id))
////                {
////                    return NotFound();
////                }
////                else
////                {
////                    throw;
////                }
////            }

////            return NoContent();
////        }

////        // POST: api/OrderItems
////        [HttpPost]
////        public async Task<ActionResult<OrderItem>> PostOrderItem(OrderItem orderItem)
////        {
////            _context.OrderItem.Add(orderItem);
////            await _context.SaveChangesAsync();

////            return CreatedAtAction("GetOrderItem", new { id = orderItem.Id }, orderItem);
////        }

////        // DELETE: api/OrderItems/5
////        [HttpDelete("{id}")]
////        public async Task<ActionResult<OrderItem>> DeleteOrderItem(int id)
////        {
////            var orderItem = await _context.OrderItem.FindAsync(id);
////            if (orderItem == null)
////            {
////                return NotFound();
////            }

////            _context.OrderItem.Remove(orderItem);
////            await _context.SaveChangesAsync();

////            return orderItem;
////        }

////        private bool OrderItemExists(int id)
////        {
////            return _context.OrderItem.Any(e => e.Id == id);
////        }
////    }

////    [Route("/api/orders/{orderid}/items")]

////    [ApiController]
////    [Produces("application/json")]
////    public class OrderItemsController : Controller
////    {
////        private readonly BetrDBContext _contxt;
////        private readonly IMapper _mapper;

////        public OrderItemsController(BetrDBContext context, IMapper mapper)
////        {
////            _contxt = context;
////            _mapper = mapper;
////        }
        
////        [HttpGet]
////        public IActionResult Get(int orderId)
////        {
////            var order = _repository.GetOrderById(User.Identity.Name, orderId);
////            if (order != null) return Ok(_mapper.Map<IEnumerable<OrderItem>, IEnumerable<OrderItemViewModel>>(order.Items));
////            return NotFound();
////        }

////        [HttpGet("{id}")]
////        public IActionResult Get(int orderId, int id)
////        {
////            var order = _repository.GetOrderById(User.Identity.Name, orderId);
////            if (order != null)
////            {
////                var item = order.Items.Where(i => i.Id == id).FirstOrDefault();
////                if (item != null)
////                {
////                    return Ok(_mapper.Map<OrderItem, OrderItemViewModel>(item));
////                }
////            }
////            return NotFound();

////        }


////    }
////}
