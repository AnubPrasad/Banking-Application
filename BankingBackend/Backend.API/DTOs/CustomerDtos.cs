using System.ComponentModel.DataAnnotations;
using Backend.DAL.Models;

namespace Backend.API.DTOs;

public class CustomerCreateDto
{
    [Required]
    [StringLength(100)]
    public string Name { get; set; } = null!;

    [Required]
    [EmailAddress]
    public string Email { get; set; } = null!;

    [Required]
    [StringLength(20)]
    public string Phone { get; set; } = null!;

    [Required]
    [StringLength(100, MinimumLength = 6)]
    public string Password { get; set; } = null!;

    [Required]
    [RegularExpression("User|Admin", ErrorMessage = "Role must be either 'User' or 'Admin'")]
    public string Role { get; set; } = null!; 
    public ICollection<Account> Accounts { get; set; } = new List<Account>();
    
}