import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface Account {
  accountNumber: string;
  username: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'closed' | 'deleted';
}

@Component({
  selector: 'app-search-account',
  templateUrl: './search-account.component.html',
  styleUrls: ['./search-account.component.css']
})
export class SearchAccountComponent {
  searchForm = this.fb.group({
    accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
  });

  accountDetails: Account | null = null;
  isLoading = false;
  errorMessage = '';

  // Mock data - replace with actual API calls in a real application
  private mockAccounts: Account[] = [
    {
      accountNumber: '1001',
      username: 'john_doe',
      name: 'John Doe',
      email: 'john@example.com',
      phone: '1234567890',
      status: 'active'
    },
    {
      accountNumber: '1002',
      username: 'jane_smith',
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '0987654321',
      status: 'closed'
    },
    {
      accountNumber: '1003',
      username: 'bob_johnson',
      name: 'Bob Johnson',
      email: 'bob@example.com',
      phone: '1122334455',
      status: 'deleted'
    }
  ];

  constructor(private fb: FormBuilder) {}

  onSearch() {
    if (this.searchForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.accountDetails = null;

      const accountNumber = this.searchForm.value.accountNumber;
      
      // Simulate API call with timeout
      setTimeout(() => {
        const foundAccount = this.mockAccounts.find(
          acc => acc.accountNumber === accountNumber
        );

        if (foundAccount) {
          this.accountDetails = foundAccount;
        } else {
          this.errorMessage = 'Account not found';
        }
        this.isLoading = false;
      }, 1000);
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'active': return 'status-active';
      case 'closed': return 'status-closed';
      case 'deleted': return 'status-deleted';
      default: return '';
    }
  }
}