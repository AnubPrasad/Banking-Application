// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-apply-loan',
//   templateUrl: './apply-loan.component.html',
//   styleUrls: ['./apply-loan.component.css']
// })
// export class ApplyLoanComponent {

// }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-loan',
  templateUrl: './apply-loan.component.html',
  styleUrls: ['./apply-loan.component.css'],
})
export class ApplyLoanComponent {
  loanForm: FormGroup;
  message = '';

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      customerId: ['', Validators.required],
      loanAmount: ['', [Validators.required, Validators.min(1000)]],
      duration: ['', [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.loanForm.valid) {
      console.log(this.loanForm.value);
      this.message = 'Loan application submitted successfully!';
    } else {
      this.message = 'Please fill in all required fields correctly.';
    }

    setTimeout(() => (this.message = ''), 3000);
  }
}
