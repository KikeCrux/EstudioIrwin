import { Component } from '@angular/core';

@Component({
  selector: 'app-servidores',
  templateUrl: './servidores.component.html',
  styleUrls: ['./servidores.component.css']
})
export class ServidoresComponent {
  // Datos de múltiples galerías
  galerias = [
    {
      nombre: 'XV Años',
      imagenes: [
        { id: 1, nombre: 'Xv Años de Karla', url: 'assets/img-galeria/27.jpg', estado: 'Subida', fecha: '2024-12-01' },
        { id: 2, nombre: 'Xv Años Heidy', url: 'assets/img-galeria/25.jpg', estado: 'Pendiente', fecha: '2024-12-02' },
        { id: 3, nombre: 'Xv Años Alejandro', url: 'assets/img-galeria/28.jpg', estado: 'Subida', fecha: '2024-12-03' },
        { id: 4, nombre: 'Xv Años Ana', url: 'assets/img-galeria/23.jpg', estado: 'Pendiente', fecha: '2024-12-04' },
        { id: 5, nombre: 'Xv Años Vannesa', url: 'assets/img-galeria/21.jpg', estado: 'Subida', fecha: '2024-12-05' }
      ]
    },
    {
      nombre: 'Boda',
      imagenes: [
        { id: 6, nombre: 'Nuestra Boda Liz & Juan', url: 'assets/img-galeria/14.jpg', estado: 'Subida', fecha: '2024-12-06' },
        { id: 7, nombre: 'Nuestra Boda Fernando & Lucia', url: 'assets/img-galeria/9.jpg', estado: 'Pendiente', fecha: '2024-12-07' },
        { id: 8, nombre: 'Nuestra Boda Gerardo & Estefania', url: 'assets/img-galeria/11.jpg', estado: 'Subida', fecha: '2024-12-08' },
        { id: 9, nombre: 'Nuestra Boda Fernando & Claudia ', url: 'assets/img-galeria/13.jpg', estado: 'Pendiente', fecha: '2024-12-09' }
      ]
    },
    {
      nombre: 'Sesiones',
      imagenes: [
        { id: 10, nombre: 'Pablo', url: 'assets/img-galeria/18.jpg', estado: 'Subida', fecha: '2024-12-10' },
        { id: 11, nombre: 'Sebastian', url: 'assets/img-galeria/2.jpg', estado: 'Pendiente', fecha: '2024-12-11' },
        { id: 12, nombre: 'Katia', url: 'assets/img-galeria/29.jpg', estado: 'Subida', fecha: '2024-12-12' },
        { id: 13, nombre: 'Dayanna', url: 'assets/img-galeria/19.jpg', estado: 'Pendiente', fecha: '2024-12-13' }
      ]
    }
  ];
}
