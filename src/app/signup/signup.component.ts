import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]],
      role: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
       console.log('Form Data:', this.signupForm.value); 
      this.http.post('http://localhost:5001/api/Auth/signup', this.signupForm.value)
        .subscribe({
          next: (response) => {
             console.log('Signup Success Response:', response);
            this.successMessage = 'Account created successfully!';
            this.errorMessage = '';
            setTimeout(() => this.router.navigate(['/login']), 2000);
          },
          error: (error) => {
            console.error('Signup Error Response:', error);
            this.errorMessage = error.error?.message || 'Signup failed. Please try again.';
            this.successMessage = '';
          }
        });
    }else{
      console.warn('Form Invalid:', this.signupForm); 
    }
  }
}