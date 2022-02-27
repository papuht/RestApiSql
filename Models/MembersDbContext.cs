using Microsoft.EntityFrameworkCore;

namespace RestApiSql.Models
{
    public class MembersDbContext : DbContext
    {
        public DbSet<Member> Members { get; set; }


#pragma warning disable CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        public MembersDbContext(DbContextOptions<MembersDbContext> options) : base(options)
#pragma warning restore CS8618 // Non-nullable field must contain a non-null value when exiting constructor. Consider declaring as nullable.
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Member>().ToTable("Members");
        }
    }
}
