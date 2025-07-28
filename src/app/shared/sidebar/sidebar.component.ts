// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { AuthService } from '../../auth.service';

// @Component({
//   selector: 'app-sidebar',
//   templateUrl: './sidebar.component.html',
//   styleUrls: ['./sidebar.component.css']
// })
// export class SidebarComponent implements OnInit {
//   currentRoute: string = '';

//   constructor(private router: Router, private authService: AuthService) {}

//   ngOnInit() {
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         this.currentRoute = event.urlAfterRedirects;
//       }
//     });
//   }

//   navigateTo(route: string) {
//     this.router.navigate([`/${route}`]);
//   }

//   logout() {
//     this.authService.logout();
//   }
// }

import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../auth.service';
 import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
   styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  // currentRoute = '';
  // userRole: string | null = null;

  // constructor(private authService: AuthService) {}

  // ngOnInit(): void {
  //   this.userRole = this.authService.getUserRole();
  // }

  // navigateTo(route: string) {
  //   window.location.href = `/${route}`;
  // }

  // logout() {
  //   this.authService.logout();
  // }
  isAdmin: boolean;
  
    constructor(private authService: AuthService, private router: Router) {
      this.isAdmin = this.authService.getUserRole() === 'Admin';
      //  this.router.navigate(['/dashboard']);
    }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   isActive(route: string): boolean {
      return this.router.isActive(route, true);
    }
    
    logout() {
      this.authService.logout();
    }
    
}
