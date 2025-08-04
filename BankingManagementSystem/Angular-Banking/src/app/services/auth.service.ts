// import { Injectable } from '@angular/core';
// import { Router } from '@angular/router';
// import { BehaviorSubject, Observable, of } from 'rxjs';
// import { map, tap } from 'rxjs/operators';
// import { HttpClient } from '@angular/common/http';
// import {jwtDecode} from 'jwt-decode';

// // export interface DecodedToken {
// //   name?: string;
// //   email?: string;
// //   "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"?: string;
// //   // Add other claims you expect in your token
// // }
// interface DecodedToken {
//   [key: string]: any;
//   'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;
//   'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': string;
//   'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
//   'Phone': string;
// }
// export interface JwtPayload {
//   "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
//   [key: string]: any;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   private baseUrl = 'http://localhost:5001/api/Auth/login';

//   private loggedIn = new BehaviorSubject<boolean>(false);

//   constructor(private http: HttpClient,private router: Router) {}

//   // login(username: string, password: string): Observable<boolean> {
//   //   if (username === 'Admin' && password === 'admin') {
//   //     this.loggedIn.next(true);
//   //     localStorage.setItem('isLoggedIn', 'true');
//   //     return of(true).pipe(
//   //       tap(() => this.router.navigate(['/home']))
//   //     );
//   //   }
//   //   return of(false);
//   // }
//   //  login(username: string, password: string): Observable<boolean> {
//   //   return this.http.post<{ token: string }>(this.baseUrl, { username, password }).pipe(
//   //     tap(response => {
//   //       localStorage.setItem('token', response.token);
//   //       this.loggedIn.next(true);
//   //       this.router.navigate(['/home']);
//   //     }),
//   //     map(() => true)
//   //   );
//   // }

// //   login(email: string, password: string): Observable<boolean> {
// //   return this.http.post<{ token: string }>(this.baseUrl, { email, password }).pipe(
// //     tap(response => {
// //       localStorage.setItem('token', response.token);
// //       this.loggedIn.next(true);
// //       this.router.navigate(['/dashboard']);
// //     }),
// //     map(() => true)
// //   );
// // }

// login(username: string, password: string): Observable<boolean> {
//   return this.http.post<{ token: string }>(this.baseUrl, { username, password }).pipe(
//     tap(response => {
//       localStorage.setItem('token', response.token);
//       this.loggedIn.next(true);
//       this.router.navigate(['/dashboard']);
//     }),
//     map(() => true)
//   );
// }

//  decodeToken(token: string): DecodedToken {
//     try {
//       return jwtDecode<DecodedToken>(token);
//     } catch (error) {
//       console.error('Error decoding token:', error);
//       return {
//   'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': '',
//   'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': '',
//   'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': '',
//   Phone: ''
// };
//     }
//   }

  

//   //   getCustomerDetails(): DecodedToken | null {
//   //   const token = this.getToken();
//   //   if (!token) return null;
//   //   return this.decodeToken(token);
//   // }
//    getCustomerDetails(): any {
//     const token = this.getToken();
//     if (!token) return null;
    
//     const decoded = jwtDecode(token) as DecodedToken;
//     return {
//       name: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
//       email: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
//       role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
//       phone: decoded['Phone']
//     };
//   }


//   isLoggedIn(): Observable<boolean> {
//     return this.loggedIn.asObservable();
//   }

//   logout() {
//     this.loggedIn.next(false);
//     localStorage.removeItem('isLoggedIn');
//     this.router.navigate(['/login']);
//   }
//    getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   // getUserRole(): string | null {
//   //   const token = this.getToken();
//   //   if (!token) return null;

//   //   try {
//   //     const payload = JSON.parse(atob(token.split('.')[1]));
//   //     return payload.role;
//   //   } catch (e) {
//   //     return null;
//   //   }
//   // }
//   getUserRole(): string | null {
//     const token = this.getToken();
//     if (!token) return null;

//     try {
//       const decoded = jwtDecode<JwtPayload>(token);
//       return decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
//     } catch (error) {
//       console.error('Invalid token', error);
//       return null;
//     }
//   }

//    private apiUrl = 'https://your-banking-api.com';


//   verifyUserForPasswordReset(userData: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/auth/verify-user`, userData);
//   }

//   resetPassword(resetData: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/auth/reset-password`, resetData);
//   }

//   // Login method
//   // login(credentials: {email: string, password: string}): Observable<any> {
//   //   return this.http.post(`${this.apiUrl}/auth/login`, credentials);
//   // }

//   // // Forgot password verification
//   // // Check if user is logged in (simple version)
//   // isLoggedIn(): boolean {
//   //   return !!localStorage.getItem('authToken');
//   // }

//   // // Get token from storage
//   // getToken(): string | null {
//   //   return localStorage.getItem('authToken');
//   // }
// }

// // new one

// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class AuthService {
 
  
// // }


import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';

// Define the structure of decoded JWT token
interface DecodedToken {
  [key: string]: any;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': string;   // username
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': string;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': string;
  Phone: string;

  // Custom banking claims (make sure backend includes these in token)
  AccountNumber: string;
  AccountType: string;
  Balance: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5100/api/Auth/login';  // Login API endpoint
  private apiUrl = 'https://your-banking-api.com';           // Other auth endpoints

  private loggedIn = new BehaviorSubject<boolean>(false);    // Reactive login state

  constructor(private http: HttpClient, private router: Router) {}

  // 🔐 LOGIN with username and password
  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{ token: string }>(this.baseUrl, { username, password }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.loggedIn.next(true);
        this.router.navigate(['/dashboard']);
      }),

      map(() => true)
     
    //   tap(response => {
    //   // Store token in localStorage
    //   localStorage.setItem('token', response.token);
    // }),
    // switchMap(() => {
    //   return this.http.get<any>(`${this.baseUrl}/getUserDetails/${username}`);
    // }),
    // tap(userDetails => {
    //   // Store user details in localStorage
    //   localStorage.setItem('customerId', userDetails.customerId);
    //   localStorage.setItem('accountNumber', userDetails.accountNumber);
    //   localStorage.setItem('accountType', userDetails.accountType);

    //   this.loggedIn.next(true);
    //   this.router.navigate(['/dashboard']);
    // }),
    // map(() => true),
    // catchError(err => {
    //   console.error('Login failed:', err);
    //   return of(false);
    // })

    );
  }

  decodeToken(token: string): DecodedToken {
  try {
    return jwtDecode<DecodedToken>(token);
  } catch (error) {
    console.error('Error decoding token:', error);
    return {
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name': '',
      'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress': '',
      'http://schemas.microsoft.com/ws/2008/06/identity/claims/role': '',
      Phone: '',
      AccountNumber: '',
      AccountType: '',
      Balance: 0
    };
  }
}


  // 👤 Get user/customer details from token
  // getCustomerDetails(): any {
  //   const token = this.getToken();
  //   if (!token) return null;

  //   const decoded = this.decodeToken(token);
  //   return {
  //     username: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
  //     email: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
  //     role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
  //     phone: decoded['Phone']
  //   };
  // }
  getCustomerDetails(): any {
  const token = this.getToken();
  if (!token) return null;

  const decoded = this.decodeToken(token);
  return {
    username: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
    email: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'],
    role: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'],
    phone: decoded['Phone'],
    accountNumber: decoded['AccountNumber'],
    accountType: decoded['AccountType'],
    balance: decoded['Balance']
  };
}


  // 🔍 Get user role
  getUserRole(): string | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      const decoded = this.decodeToken(token);
      return decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    } catch (error) {
      console.error('Invalid token', error);
      return null;
    }
  }

  // ✅ Observable to track login state
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  // 🔐 Logout user
  logout() {
    this.loggedIn.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // 📦 Get JWT from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // 🔐 Forgot password: Verify user
  verifyUserForPasswordReset(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/verify-user`, userData);
  }

  // 🔐 Reset password
  resetPassword(resetData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/reset-password`, resetData);
  }
}
