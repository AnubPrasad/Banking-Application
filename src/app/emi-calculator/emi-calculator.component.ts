
import { Component } from '@angular/core';

@Component({
  selector: 'app-emi-calculator',
  templateUrl: './emi-calculator.component.html',
  styleUrls: ['./emi-calculator.component.css']
})
export class EmiCalculatorComponent {
  amount: number = 200000;
  duration: number = 6;
  interestRate: number = 2;

  amounts: number[] = [100000, 200000, 300000, 500000];
  durations: number[] = [3, 6, 9, 12];

  emiData: { loanAmount: number, interest: number, total: number }[] = [];

  calculateEMI() {
    this.emiData = [];
    const monthlyLoan = Math.floor(this.amount / this.duration);
    const interest = Math.floor((this.amount * this.interestRate) / 100 / this.duration);
    const total = monthlyLoan + interest;

    for (let i = 0; i < this.duration; i++) {
      this.emiData.push({
        loanAmount: monthlyLoan,
        interest,
        total
      });
    }
  }
}
