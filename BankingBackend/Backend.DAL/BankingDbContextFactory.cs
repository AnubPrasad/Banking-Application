// File: BankingDbContextFactory.cs
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Backend.DAL.Contexts;

namespace Backend.DAL
{
    public class BankingDbContextFactory : IDesignTimeDbContextFactory<BankingDbContext>
    {
        public BankingDbContext CreateDbContext(string[] args)
        {
            var optionsBuilder = new DbContextOptionsBuilder<BankingDbContext>();
            optionsBuilder.UseSqlServer("Server=localhost,1433;Database=BankingDb;User Id=sa;Password=YourStrong@Pass123;TrustServerCertificate=True;");

            return new BankingDbContext(optionsBuilder.Options);
        }
    }
}
