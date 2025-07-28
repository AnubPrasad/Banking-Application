using System;
using System.Collections.Generic;

namespace Backend.DAL.Models;

public partial class Account
{
    public string AccountNumber { get; set; } = null!;

    public int CustomerID { get; set; }

    public decimal Balance { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual ICollection<Transaction> Transactions { get; set; } = new List<Transaction>();
}
