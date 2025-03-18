using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PC_Builder.Server.Data;
using PC_Builder.Server.Models;

namespace PC_Builder.Server.Controllers
{
    [Route("api/cpus")]
    [ApiController]
    public class CpuController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CpuController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cpu>>> GetCpus()
        {
            return await _context.Cpus.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Cpu>> GetCpu(int id)
        {
            var cpu = await _context.Cpus.FindAsync(id);

            if(cpu == null)
            {
                return NotFound();
            }

            return cpu;
        }
    }
}
