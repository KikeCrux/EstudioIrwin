import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://localhost:5000/api/service';

  constructor(private http: HttpClient) { }

  // Registrar un servicio
  createService(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  // Obtener todos los servicios
  getServices(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  // Actualizar un servicio
  updateService(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, data);
  }

  // Eliminar un servicio
  deleteService(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // Buscar servicios por nombre
  searchServices(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?nombre=${name}`);
  }
}
