using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace DDSApp.Models
{
    public class SpiralDocsContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public SpiralDocsContext(DbContextOptions<SpiralDocsContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            foreach (var relationship in modelBuilder.Model.GetEntityTypes().SelectMany(e => e.GetForeignKeys()))
            {
                relationship.DeleteBehavior = DeleteBehavior.Restrict; 
            }

            ConfigureModelBuilderForUser(modelBuilder); 
        }
        void ConfigureModelBuilderForUser(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<User>()
                .Property(user => user.Username)
                .HasMaxLength(60)
                .IsRequired();

            modelBuilder.Entity<User>()
                .Property(user => user.Email)
                .HasMaxLength(60)
                .IsRequired();
        }
    }
}

