// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-employee',
//   templateUrl: './employee.component.html',
//   styleUrls: ['./employee.component.css']
// })
// export class EmployeeComponent {

// }

import { Component } from '@angular/core';
// import { Person } from '../models/person.model';
import { Person } from '../person.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  customers: Person[] = [
    {
      name: 'Ravi Kumar',
      email: 'ravi@example.com',
      phone: '9876543210',
      address: 'Delhi',
      status: 'Active',
      dateOfJoining: '2023-01-15'
    },
    {
      name: 'Sneha Mehta',
      email: 'sneha@example.com',
      phone: '9123456780',
      address: 'Mumbai',
      status: 'Inactive',
      dateOfJoining: '2022-05-21'
    }
  ];
}
