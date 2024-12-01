import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly LOGGED_IN_KEY = 'isLoggedIn';
  private loggedInSubject = new BehaviorSubject<boolean>(this.getLoggedIn());
  private apiUrl = 'http://localhost:5000/api/user';

  constructor(private http: HttpClient) { }

  loggedIn$ = this.loggedInSubject.asObservable();

  // Registrar un usuario
  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/clients/register`, data);
  }

  // Obtener todos los usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  // Verificar un usuario (inicio de sesión)
  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data);
  }
  // Establecer el estado de autenticación
  setLoggedIn(status: boolean): void {
    localStorage.setItem(this.LOGGED_IN_KEY, JSON.stringify(status));
    this.loggedInSubject.next(status); // Notificar a los suscriptores
  }

  // Obtener el estado de autenticación
  getLoggedIn(): boolean {
    const loggedIn = localStorage.getItem(this.LOGGED_IN_KEY);
    return loggedIn ? JSON.parse(loggedIn) : false;
  }

  // Cerrar sesión
  logout(): void {
    localStorage.removeItem(this.LOGGED_IN_KEY);
    this.loggedInSubject.next(false); // Notificar a los suscriptores
  }
}
