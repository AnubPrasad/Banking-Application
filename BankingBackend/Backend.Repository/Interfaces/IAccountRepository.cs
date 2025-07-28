using Backend.DAL.Models;

namespace Backend.Repository.Interfaces;

public interface IAccountRepository
{
    Task<Account> Create(Account account);
    Task<Account> GetByAccountNumber(string accountNumber);
    Task<List<Account>> GetByCustomerId(int customerId);
}