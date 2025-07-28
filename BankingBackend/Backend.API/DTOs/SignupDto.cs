
using System.ComponentModel.DataAnnotations;

public class SignupDto
{
    [Required]
    public string Name { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    [Phone]
    public string Phone { get; set; }

    [Required]
    public string Role { get; set; } // "User" or "Admin"

    [Required]
    [MinLength(6)]
    public string Password { get; set; }
}
