using Backend.DAL.Models;

namespace Backend.Repository.Interfaces;
public interface ITransactionRepository
{
    Task<Transaction> Create(Transaction transaction);
    Task<List<Transaction>> GetByAccountNumber(string accountNumber);
}