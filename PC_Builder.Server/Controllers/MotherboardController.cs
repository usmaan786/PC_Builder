using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PC_Builder.Server.Data;
using PC_Builder.Server.Models;

namespace PC_Builder.Server.Controllers
{
    [Route("api/motherboards")]
    [ApiController]
    public class MotherboardController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MotherboardController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Motherboard>>> GetMotherboard()
        {
            return await _context.Motherboards.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Motherboard>> GetMotherboard(int id)
        {
            var Motherboard = await _context.Motherboards.FindAsync(id);

            if (Motherboard == null)
            {
                return NotFound();
            }

            return Motherboard;
        }
    }
}
