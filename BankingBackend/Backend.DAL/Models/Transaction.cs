using System;
using System.Collections.Generic;

namespace Backend.DAL.Models;

public partial class Transaction
{
    public int TransactionID { get; set; }

    public string AccountNumber { get; set; } = null!;

    public DateTime Date { get; set; }

    public string Type { get; set; } = null!;

    public decimal Amount { get; set; }

    public virtual Account Account { get; set; } = null!;
}
