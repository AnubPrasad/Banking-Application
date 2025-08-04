import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface AccountBalance {
  accountNumber: string;
  accountHolder: string;
  balance: number;
  lastUpdated: string;
  status: 'active' | 'closed' | 'dormant';
}

@Component({
  selector: 'app-view-balance',
  templateUrl: './view-balance.component.html',
  styleUrls: ['./view-balance.component.css']
})
export class ViewBalanceComponent {
  searchForm = this.fb.group({
    accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
  });

  accountBalance: AccountBalance | null = null;
  isLoading = false;
  errorMessage = '';

  // Mock data - replace with actual API calls in a real application
  private mockBalances: AccountBalance[] = [
    {
      accountNumber: '1001',
      accountHolder: 'John Doe',
      balance: 2500.75,
      lastUpdated: '2025-07-18T14:30:00',
      status: 'active'
    },
    {
      accountNumber: '1002',
      accountHolder: 'Jane Smith',
      balance: 1800.50,
      lastUpdated: '2025-07-17T09:15:00',
      status: 'active'
    },
    {
      accountNumber: '1003',
      accountHolder: 'Bob Johnson',
      balance: 0.00,
      lastUpdated: '2025-06-01T10:00:00',
      status: 'dormant'
    }
  ];

  constructor(private fb: FormBuilder) {}

  onSearch() {
    if (this.searchForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.accountBalance = null;

      const accountNumber = this.searchForm.value.accountNumber;
      
      // Simulate API call with timeout
      setTimeout(() => {
        const foundBalance = this.mockBalances.find(
          acc => acc.accountNumber === accountNumber
        );

        if (foundBalance) {
          this.accountBalance = foundBalance;
        } else {
          this.errorMessage = 'Account not found';
        }
        this.isLoading = false;
      }, 1000);
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'active': return 'status-active';
      case 'closed': return 'status-closed';
      case 'dormant': return 'status-dormant';
      default: return '';
    }
  }
}