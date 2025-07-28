using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.DAL;
using Backend.DAL.Contexts;
using Backend.DAL.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace Backend.API.Services;

public class AuthService
{
    private readonly IConfiguration _config;
    private readonly BankingDbContext _context;

    public AuthService(IConfiguration config, BankingDbContext context)
    {
        _config = config;
        _context = context;
    }

    public string GenerateToken(Customer customer)
    {
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, customer.CustomerID.ToString()),
             new Claim(ClaimTypes.Name, customer.Name),
            new Claim(ClaimTypes.Email, customer.Email),
            new Claim(ClaimTypes.Role, customer.Role),
             new Claim("Phone", customer.Phone)
        };

        var token = new JwtSecurityToken(
            _config["Jwt:Issuer"],
            _config["Jwt:Audience"],
            claims,
            expires: DateTime.Now.AddMinutes(_config.GetValue<double>("Jwt:ExpireMinutes")),
            signingCredentials: credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }

    public Customer? Authenticate(string email, string password)
    {
        // In production, use password hashing
        return _context.Customers.FirstOrDefault(u =>
            u.Email == email && u.Password == password);
    }

      public async Task<Customer> Signup(SignupDto signupDto)
    {
        var hashedPassword = signupDto.Password;

        var customer = new Customer
        {
            Name = signupDto.Name,
            Email = signupDto.Email,
            Password = hashedPassword,
            Phone = signupDto.Phone,
            Role  = signupDto.Role
        };

        _context.Customers.Add(customer);
        await _context.SaveChangesAsync();

        return customer;
    }

    internal async Task<bool> UserExists(string email)
    {
          return await _context.Customers.AnyAsync(c => c.Email == email);
    }
}