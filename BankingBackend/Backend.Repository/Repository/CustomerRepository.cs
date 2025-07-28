using Backend.DAL;
using Backend.DAL.Contexts;
using Backend.DAL.Models;
using Backend.Repository.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Repository;

public class CustomerRepository : ICustomerRepository
{
    private readonly BankingDbContext _context;
    public CustomerRepository(BankingDbContext context) => _context = context;

    public async Task<Customer> Create(Customer customer)
    {
        _context.Customers.Add(customer);
        await _context.SaveChangesAsync();
        return customer;
    }

    // Backend.Repository/CustomerRepository.cs
    public async Task<Customer> GetById(int id)
    {
        return await _context.Customers
            .Include(c => c.Accounts) // Important: Include related data
            .ThenInclude(a => a.Transactions) // Include nested related data
            .FirstOrDefaultAsync(c => c.CustomerID == id);
    }

    public async Task<List<Customer>> GetAll() =>
await _context.Customers.Include(c => c.Accounts).ToListAsync();
    

    public async Task<Customer?> GetByEmail(string email)
    {
        return await _context.Customers
            .FirstOrDefaultAsync(c => c.Email == email);
    }

    public async Task<bool> EmailExists(string email)
    {
        return await _context.Customers
            .AnyAsync(c => c.Email == email);
    }
}