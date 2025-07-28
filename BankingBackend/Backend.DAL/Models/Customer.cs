using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Backend.DAL.Models;

public partial class Customer
{
    
    public int CustomerID { get; set; }
[Required]
    public string Name { get; set; } = null!;
    [Required]
    [EmailAddress]
    public string Email { get; set; } = null!;

    public string Phone { get; set; } = null!;
    [Required]
    public string Password { get; set; } = null!; 

    public string Role { get; set; } = "user";
    // public Role Role { get; set; }  

    public virtual ICollection<Account> Accounts { get; set; } = new List<Account>();
}

// public enum Role
// {
//     Admin,
//     User
// }