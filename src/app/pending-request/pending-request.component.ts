// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-pending-request',
//   templateUrl: './pending-request.component.html',
//   styleUrls: ['./pending-request.component.css']
// })
// export class PendingRequestComponent {

// }
import { Component } from '@angular/core';

@Component({
  selector: 'app-pending-request',
  templateUrl: './pending-request.component.html',
  styleUrls: ['./pending-request.component.css']
})
export class PendingRequestComponent {
  showLoanRequests = false;
  showSavingRequests = false;

  loanRequests = [
    {
      customerName: 'Ravi Kumar',
      amount: 100000,
      duration: '12 months',
      interestRate: '10%',
      fromDate: '2025-07-01',
      status: 'Pending'
    },
    {
      customerName: 'Sneha Patel',
      amount: 50000,
      duration: '6 months',
      interestRate: '8%',
      fromDate: '2025-07-10',
      status: 'Pending'
    }
  ];

  handleApprove(index: number) {
    this.loanRequests[index].status = 'Approved';
  }

  handleReject(index: number) {
    this.loanRequests[index].status = 'Rejected';
  }

  showLoan() {
    this.showLoanRequests = true;
    this.showSavingRequests = false;
  }

  showSaving() {
    this.showLoanRequests = false;
    this.showSavingRequests = true;

    // You can also populate savingRequests if needed
  }
}
