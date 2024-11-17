import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private apiUrl = 'http://localhost:5000/api/notification';

  constructor(private http: HttpClient) { }

  // Registrar una notificación
  sendNotification(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  // Obtener todas las notificaciones (opcionalmente por usuario)
  getNotifications(userId?: string): Observable<any> {
    return this.http.get(
      userId ? `${this.apiUrl}/all?id_usuario=${userId}` : `${this.apiUrl}/all`
    );
  }

  // Actualizar el estado de una notificación
  updateNotificationStatus(id: string, status: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, { estado: status });
  }

  // Eliminar una notificación
  deleteNotification(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  // Buscar notificaciones por mensaje
  searchNotifications(message: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?mensaje=${message}`);
  }
}
