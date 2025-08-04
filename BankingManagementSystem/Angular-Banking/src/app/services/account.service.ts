import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

   private apiUrl = 'http://localhost:5001/api/Customers'; // Replace with your actual API URL

  constructor(private http: HttpClient) { }

  createUserAccount(userData: any): Observable<any> {
    // Set default password and role for new users
    const accountData = {
      ...userData,
      password: this.generateDefaultPassword(), // You can implement this
      role: 'User', // Default role for new accounts
      accounts: [] // Initialize with empty accounts array
    };
    return this.http.post(`${this.apiUrl}/accounts`, accountData);
  }

  private generateDefaultPassword(): string {
    // Implement a method to generate a temporary password
    return 'Temp@123'; // In production, use a more secure method
  }
}
