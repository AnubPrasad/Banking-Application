// import { Component } from '@angular/core';
// import { AuthService } from './services/auth.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'banking-app';
//   constructor(public authService: AuthService, router: Router) {}

//   isAuthPage(): boolean {
//     const route = this.router.url;
//     return route.includes('login') || route.includes('forgot-password') || route.includes('reset-password') || route.includes('signup');
//   }
// }

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private router: Router) {}

  isAuthPage(): boolean {
    const route = this.router.url;
    return route.includes('login') || route.includes('forgot-password') || route.includes('reset-password') || route.includes('signup');
  }
}
