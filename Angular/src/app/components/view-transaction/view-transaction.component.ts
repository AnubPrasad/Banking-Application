import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

interface Transaction {
  date: string;
  type: 'Deposit' | 'Withdrawal' | 'Transfer' | 'Payment';
  amount: number;
  description: string;
}

@Component({
  selector: 'app-view-transaction',
  templateUrl: './view-transaction.component.html',
  styleUrls: ['./view-transaction.component.css']
})
export class ViewTransactionComponent {

  
  searchForm = this.fb.group({
    accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
  });

  transactions: Transaction[] = [];
  isLoading = false;
  errorMessage = '';
  accountNumber = '';

  // Mock data - replace with actual API calls in a real application
  private mockTransactions: { [key: string]: Transaction[] } = {
    '1001': [
      {
        date: '2025-07-01',
        type: 'Deposit',
        amount: 1000,
        description: 'Initial deposit'
      },
      {
        date: '2025-07-05',
        type: 'Withdrawal',
        amount: -200,
        description: 'ATM withdrawal'
      },
      {
        date: '2025-07-10',
        type: 'Transfer',
        amount: -500,
        description: 'Transfer to account 1002'
      },
      {
        date: '2025-07-15',
        type: 'Deposit',
        amount: 1500,
        description: 'Salary deposit'
      }
    ],
    '1002': [
      {
        date: '2025-07-03',
        type: 'Deposit',
        amount: 500,
        description: 'Initial deposit'
      },
      {
        date: '2025-07-10',
        type: 'Transfer',
        amount: 500,
        description: 'Transfer from account 1001'
      }
    ]
  };

  constructor(private fb: FormBuilder) {}

  onSearch() {
    if (this.searchForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      this.transactions = [];
      this.accountNumber = this.searchForm.value.accountNumber || '';

      // Simulate API call with timeout
      setTimeout(() => {
        const accountTransactions = this.mockTransactions[this.accountNumber];

        if (accountTransactions && accountTransactions.length > 0) {
          this.transactions = accountTransactions;
        } else {
          this.errorMessage = 'No transactions found for this account';
        }
        this.isLoading = false;
      }, 1000);
    }
  }


   downloadAsPDF() {
    if (this.transactions.length === 0) {
      alert('No transactions to download');
      return;
    }

    try {
      const doc = new jsPDF();
      const title = `Transaction History - Account ${this.accountNumber}`;
      const currentDate = new Date().toLocaleDateString();

      // Add title
      doc.setFontSize(16);
      doc.text(title, 14, 20);
      
      // Add subtitle
      doc.setFontSize(10);
      doc.text(`Generated on ${currentDate}`, 14, 30);

      // Prepare table data
      const tableData = this.transactions.map(tx => [
        this.formatDate(tx.date),
        tx.type,
        tx.description,
        (tx.amount >= 0 ? '+' : '') + tx.amount.toFixed(2)
      ]);

      // Generate table
      autoTable(doc, {
        head: [['Date', 'Type', 'Description', 'Amount']],
        body: tableData,
        startY: 40,
        styles: {
          cellPadding: 5,
          fontSize: 10
        },
        headStyles: {
          fillColor: [33, 150, 243], // Blue header
          textColor: 255, // White text
          fontStyle: 'bold'
        },
        columnStyles: {
          3: { halign: 'right' } // Right-align amount column
        }
      });

      // Save PDF
      doc.save(`${title.replace(/ /g, '_')}_${currentDate.replace(/\//g, '-')}.pdf`);
    } catch (error) {
      console.error('PDF generation error:', error);
      alert('Failed to generate PDF. Please try again.');
    }
  }

  getTypeClass(type: string): string {
    switch (type) {
      case 'Deposit': return 'type-deposit';
      case 'Withdrawal': return 'type-withdrawal';
      case 'Transfer': return 'type-transfer';
      case 'Payment': return 'type-payment';
      default: return '';
    }
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  }
}