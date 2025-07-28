using Backend.DAL.Models;

namespace Backend.Repository.Interfaces;

public interface ICustomerRepository
{
    Task<Customer> Create(Customer customer);
    Task<Customer> GetById(int id);
    Task<List<Customer>> GetAll();
    Task<Customer?> GetByEmail(string email); // Add this line
    Task<bool> EmailExists(string email); //
}