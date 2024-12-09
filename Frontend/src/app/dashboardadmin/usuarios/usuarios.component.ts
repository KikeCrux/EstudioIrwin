import { Component } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {
  // Simulación de datos de usuarios con imágenes
  usuarios = [
    { 
      id: 1, 
      nombre: 'Juan Pérez', 
      correo: 'juanperez@example.com', 
      registro: '2024-11-15', 
      estado: 'Activo', 
      imagen: 'assets/img-usuarios/2.png' 
    },
    { 
      id: 2, 
      nombre: 'María Gómez', 
      correo: 'mariagomez@example.com', 
      registro: '2024-11-16', 
      estado: 'Inactivo', 
      imagen: 'assets/img-usuarios/1.png' 
    },
    { 
      id: 3, 
      nombre: 'Carlos López', 
      correo: 'carloslopez@example.com', 
      registro: '2024-11-17', 
      estado: 'Bloqueado', 
      imagen: 'assets/img-usuarios/2.png' 
    },
    { 
      id: 4, 
      nombre: 'Ana Martínez', 
      correo: 'anamartinez@example.com', 
      registro: '2024-11-18', 
      estado: 'Activo', 
      imagen: 'assets/img-usuarios/1.png' 
    },
    { 
      id: 5, 
      nombre: 'Luis Ramírez', 
      correo: 'luisramirez@example.com', 
      registro: '2024-11-19', 
      estado: 'Inactivo', 
      imagen: 'assets/img-usuarios/2.png' 
    },
    { 
      id: 6, 
      nombre: 'Sofía González', 
      correo: 'sofiagonzalez@example.com', 
      registro: '2024-11-20', 
      estado: 'Activo', 
      imagen: 'assets/img-usuarios/1.png' 
    },
    { 
      id: 7, 
      nombre: 'Pedro Sánchez', 
      correo: 'pedrosanchez@example.com', 
      registro: '2024-11-21', 
      estado: 'Bloqueado', 
      imagen: 'assets/img-usuarios/2.png' 
    }
  ];
}
