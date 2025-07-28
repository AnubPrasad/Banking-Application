import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{
//  username: string = 'Guest'; // Default value
 username: string = 'Anub';
  customerDetails: any = null;
  
  constructor(private authService: AuthService) {}
  
  // ngOnInit() {
  //   // Get username from auth service or decoded token
  //   const token = this.authService.getToken();
  //   if (token) {
  //     // Example - get username from decoded token
  //     const decoded = this.authService.decodeToken(token);
  //     this.username = decoded.name || 'Customer';
  //   }
  // }
  ngOnInit() {
    const details = this.authService.getCustomerDetails();
    if (details) {
      this.customerDetails = details;
      console.log(details.name);
      this.username = details.name || 'Customer';
    }
  }
}
