// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-account',
//   templateUrl: './account.component.html',
//   styleUrls: ['./account.component.css']
// })
// export class AccountComponent {

// }

import { Component } from '@angular/core';
// import { Person } from '../models/person.model';
import { Person } from '../person.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  accounts: Person[] = [
    {
      name: 'Amit Verma',
      email: 'amit@bank.com',
      phone: '9988776655',
      address: 'Chennai',
      status: 'Active',
      dateOfJoining: '2024-08-01'
    }
  ];
}
