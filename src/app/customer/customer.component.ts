// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-customer',
//   templateUrl: './customer.component.html',
//   styleUrls: ['./customer.component.css']
// })
// export class CustomerComponent {

// }

import { Component } from '@angular/core';
// import { Person } from '../models/person.model';
import { Person } from '../person.model';
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
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
