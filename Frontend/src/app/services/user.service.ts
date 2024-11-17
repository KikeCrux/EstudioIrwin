import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:5000/api/user';

  constructor(private http: HttpClient) { }

  // Registrar un usuario
  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // Obtener todos los usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Verificar un usuario (inicio de sesión)
  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
}
