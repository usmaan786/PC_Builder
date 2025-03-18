using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PC_Builder.Server.Data;
using PC_Builder.Server.Models;

namespace PC_Builder.Server.Controllers
{
    [Route("api/gpus")]
    [ApiController]
    public class GpuController : ControllerBase
    {
        private readonly AppDbContext _context;

        public GpuController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gpu>>> GetGpus()
        {
            return await _context.Gpus.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Gpu>> GetGpu(int id)
        {
            var Gpu = await _context.Gpus.FindAsync(id);

            if (Gpu == null)
            {
                return NotFound();
            }

            return Gpu;
        }
    }
}
