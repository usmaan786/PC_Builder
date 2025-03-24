using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PC_Builder.Server.Data;
using PC_Builder.Server.Models;

namespace PC_Builder.Server.Controllers
{
    [Route("api/ram")]
    [ApiController]
    public class RamController : ControllerBase
    {
        private readonly AppDbContext _context;

        public RamController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Ram>>> GetRam()
        {
            return await _context.Ram.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Ram>> GetRam(int id)
        {
            var Ram = await _context.Ram.FindAsync(id);

            if (Ram == null)
            {
                return NotFound();
            }

            return Ram;
        }
    }
}
