// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class TransactionService {

//   constructor() { }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transaction } from '../transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private apiUrl = 'https://your-api-url/api/transactions';

  constructor(private http: HttpClient) {}

  getAllTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}/all`);
  }

  getTransactionsByDate(from: string, to: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.apiUrl}?from=${from}&to=${to}`);
  }
}
