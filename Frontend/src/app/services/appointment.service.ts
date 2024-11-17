import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:5000/api/appointment';

  constructor(private http: HttpClient) { }

  // Crear una cita
  createAppointment(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  // Obtener todas las citas
  getAppointments(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  // Actualizar una cita
  updateAppointment(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, data);
  }

  // Eliminar una cita
  deleteAppointment(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // Buscar citas por usuario
  getAppointmentsByUser(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/all?id_usuario=${userId}`);
  }
}
