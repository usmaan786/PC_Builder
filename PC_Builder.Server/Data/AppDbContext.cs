using PC_Builder.Server.Models;
using Microsoft.EntityFrameworkCore;

namespace PC_Builder.Server.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Cpu> Cpus { get; set; }
        public DbSet<Gpu> Gpus { get; set; }
        public DbSet<Ram> Ram { get; set; }

        public DbSet<Motherboard> Motherboards { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Optional: Seed initial data (for testing)
  
            /*modelBuilder.Entity<Cpu>().HasData(
                new Cpu { Id=1, Name = "Intel Core i7-13700K", Price = 420.00 },
                new Cpu { Id=2, Name = "AMD Ryzen 7 7800X3D", Price = 449.00 }
            );

            modelBuilder.Entity<Gpu>().HasData(
                new Gpu { Id=1, Name = "Geforce RTX 4060", Price = 284.99 },
                new Gpu { Id=2, Name = "Geforce RTX 4080", Price = 1650.00 }
            );*/
        }
    }
}
