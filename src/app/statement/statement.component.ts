// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-statement',
//   templateUrl: './statement.component.html',
//   styleUrls: ['./statement.component.css']
// })
// export class StatementComponent {

// }

import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction.model';
// import { TransactionService } from '../transaction.service';
import { TransactionService } from '../services/transaction.service';
@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  transactions: Transaction[] = [];
  fromDate = '';
  toDate = '';
  loadDetailed = false;

  constructor(private transactionService: TransactionService) {}

  ngOnInit(): void {}

  loadMiniStatement() {
    this.loadDetailed = false;
    this.transactionService.getAllTransactions().subscribe(data => {
      this.transactions = data.slice(-10).reverse();
    });
  }

  loadDetailedStatement() {
    if (this.fromDate && this.toDate) {
      this.transactionService.getTransactionsByDate(this.fromDate, this.toDate).subscribe(data => {
        this.transactions = data;
      });
    } else {
      alert('Please select both From and To dates');
    }
  }
}
