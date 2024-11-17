import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiUrl = 'http://localhost:5000/api/gallery';

  constructor(private http: HttpClient) { }

  // Registrar un archivo en la galería
  uploadFile(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  // Obtener todos los archivos (opcionalmente por portafolio)
  getFiles(portfolioId?: string): Observable<any> {
    return this.http.get(
      portfolioId ? `${this.apiUrl}/all?id_portafolio=${portfolioId}` : `${this.apiUrl}/all`
    );
  }

  // Buscar archivos por nombre
  searchFilesByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search?nombre=${name}`);
  }

  // Eliminar un archivo
  deleteFile(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
