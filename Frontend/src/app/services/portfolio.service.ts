import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private apiUrl = 'http://localhost:5000/api/portfolio';

  constructor(private http: HttpClient) { }

  // Registrar un portafolio
  createPortfolio(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  // Obtener todos los portafolios (opcionalmente por usuario)
  getPortfolios(userId?: string): Observable<any> {
    return this.http.get(
      userId ? `${this.apiUrl}/all?id_usuario=${userId}` : `${this.apiUrl}/all`
    );
  }

  // Actualizar un portafolio
  updatePortfolio(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, data);
  }

  // Eliminar un portafolio
  deletePortfolio(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // Buscar portafolios por título
  searchPortfolios(title: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?titulo=${title}`);
  }
}
