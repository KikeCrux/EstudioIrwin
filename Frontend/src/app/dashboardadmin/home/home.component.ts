import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Galerías Destacadas
  galerias = [
    { nombre: 'XV Años de Karla', url: 'assets/img-galeria/32.jpg' },
    { nombre: 'XV Años Alejandro', url: 'assets/img-galeria/30.jpg' },
    { nombre: 'Boda de Laura y Luis', url: 'assets/img-galeria/33.jpg' }
  ];

  // Súper Usuarios
  usuarios = [
    { nombre: 'Juan Pérez' },
    { nombre: 'María Gómez' },
    { nombre: 'Ana Martínez' }
  ];

  // Próximas Citas
  citas = [
    { cliente: 'Juan Pérez', fecha: '2024-12-10 10:00', descripcion: 'Reunión para entrega de trabajo' },
    { cliente: 'María Gómez', fecha: '2024-12-11 15:00', descripcion: 'Revisión de contrato' },
    { cliente: 'Ana Martínez', fecha: '2024-12-13 11:30', descripcion: 'Evaluación de proyecto' }
  ];
}
