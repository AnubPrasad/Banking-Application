using Backend.API.DTOs;
using Backend.DAL.Models;
using Backend.Repository.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class CustomersController : ControllerBase
{
    private readonly ICustomerRepository _repo;
    public CustomersController(ICustomerRepository repo) => _repo = repo;

    [HttpGet]
    public async Task<ActionResult<List<Customer>>> Get() =>
        Ok(await _repo.GetAll());

    [HttpGet("{id}")]
    public async Task<ActionResult<Customer>> Get(int id)
    {
        var customer = await _repo.GetById(id);

        if (customer == null)
        {
            return NotFound(new
            {
                Message = $"Customer with ID {id} not found",
                Status = 404
            });
        }

        return Ok(customer);
    }
    // [HttpPost]
    // public async Task<ActionResult<Customer>> Post(Customer customer)
    // {
    //     var created = await _repo.Create(customer);
    //     return CreatedAtAction(nameof(Get), new { id = created.CustomerID }, created);
    // }
    [HttpPost]
    public async Task<ActionResult<Customer>> Post([FromBody] CustomerCreateDto customerDto)
    {
        if (await _repo.EmailExists(customerDto.Email))
            return BadRequest("Email already exists");

        var customer = new Customer
        {
            Name = customerDto.Name,
            Email = customerDto.Email,
            Phone = customerDto.Phone,
            Password = customerDto.Password, // In production, hash this password
            // Role = "User" // Default role
             Role = customerDto.Role 
        };

        var created = await _repo.Create(customer);
        return CreatedAtAction(nameof(Get), new { id = created.CustomerID }, created);
    }
}

