import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:5000/api/transaction';

  constructor(private http: HttpClient) { }

  // Registrar una transacción
  createTransaction(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  // Obtener todas las transacciones (opcionalmente por usuario)
  getTransactions(userId?: string): Observable<any> {
    return this.http.get(
      userId ? `${this.apiUrl}/all?id_usuario=${userId}` : `${this.apiUrl}/all`
    );
  }

  // Actualizar una transacción
  updateTransaction(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, data);
  }

  // Eliminar una transacción
  deleteTransaction(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // Buscar transacciones por fecha
  searchTransactionsByDate(date: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?fecha=${date}`);
  }
}
