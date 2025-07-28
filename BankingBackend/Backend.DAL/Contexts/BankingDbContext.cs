using System;
using System.Collections.Generic;
using Backend.DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace Backend.DAL.Contexts;

public partial class BankingDbContext : DbContext
{
    public BankingDbContext()
    {
    }

    public BankingDbContext(DbContextOptions<BankingDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Account> Accounts { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Transaction> Transactions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=localhost;Database=BankingDb;User Id=sa;Password=YourStrong@Pass123;Encrypt=False;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Account>(entity =>
        {
            entity.HasKey(e => e.AccountNumber);

            entity.HasIndex(e => e.CustomerID, "IX_Accounts_CustomerID");

            entity.Property(e => e.Balance).HasColumnType("decimal(18, 2)");

            entity.HasOne(d => d.Customer).WithMany(p => p.Accounts).HasForeignKey(d => d.CustomerID);
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.Property(e => e.Role)
                .HasMaxLength(20)
                .IsUnicode(false)
                .HasDefaultValue("user");
        });

        modelBuilder.Entity<Transaction>(entity =>
        {
            entity.HasIndex(e => e.AccountNumber, "IX_Transactions_AccountNumber");

            entity.Property(e => e.Amount).HasColumnType("decimal(18, 2)");

            entity.HasOne(d => d.Account).WithMany(p => p.Transactions).HasForeignKey(d => d.AccountNumber);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
