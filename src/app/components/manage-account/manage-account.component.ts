import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AccountService } from 'src/app/services/account.service'; 
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-manage-account',
  templateUrl: './manage-account.component.html',
  styleUrls: ['./manage-account.component.css']
})
export class ManageAccountComponent implements OnInit {
  
  activeTab: string = 'create';
  createForm!: FormGroup;  // Add definite assignment assertion
  deleteForm!: FormGroup;  // Add definite assignment assertion
  closeForm!: FormGroup;   // Add definite assignment assertion
  http: any;

  constructor(private fb: FormBuilder,http: HttpClient) {}

  ngOnInit(): void {
    this.initializeForms();
  }

  initializeForms(): void {
    this.createForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]]
    });

    this.deleteForm = this.fb.group({
      accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
    });

    this.closeForm = this.fb.group({
      accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]]
    });
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  onCreateSubmit(): void {
    if (this.createForm.valid) {
      console.log('Account created:', this.createForm.value);
      alert('Account created successfully!');
      this.createForm.reset();
    } else {
      alert('Please fill all required fields correctly!');
    }
  }

  onDeleteSubmit(): void {
    if (this.deleteForm.valid) {
      console.log('Account deleted:', this.deleteForm.value.accountNumber);
      alert('Account deleted successfully!');
      this.deleteForm.reset();
    }
  }

  onCloseSubmit(): void {
    if (this.closeForm.valid) {
      console.log('Account closed:', this.closeForm.value.accountNumber);
      alert('Account closed successfully!');
      this.closeForm.reset();
    }
  }
  
  
}