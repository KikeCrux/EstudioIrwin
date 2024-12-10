import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboardadmin-layout',
  templateUrl: './dashboardadmin-layout.component.html',
  styleUrls: ['./dashboardadmin-layout.component.css']
})
export class DashboardadminLayoutComponent {
  // Galerías Destacadas (fijas)
  galerias = [
    { nombre: 'XV Años de Karla', url: 'assets/img-galeria/32.jpg' },
    { nombre: 'XV Años Alejandro', url: 'assets/img-galeria/30.jpg' },
    { nombre: 'Boda de Laura y Luis', url: 'assets/img-galeria/33.jpg' }
  ];

  // Súper Usuarios
  usuarios = [
    { nombre: 'Juan Pérez' },
    { nombre: 'María Gómez' },
    { nombre: 'Ana Martínez' },
    { nombre: 'Carlos Jiménez' },
    { nombre: 'Sofía López' }
  ];

  // Próximas Citas (dinámicas)
  citas = [
    { cliente: 'Juan Pérez', fecha: '2024-12-10 10:00 AM', descripcion: 'Reunión para entrega de trabajo' },
    { cliente: 'María Gómez', fecha: '2024-12-11 3:00 PM', descripcion: 'Revisión de contrato' },
    { cliente: 'Ana Martínez', fecha: '2024-12-13 11:30 AM', descripcion: 'Evaluación de proyecto' },
    { cliente: 'Carlos Jiménez', fecha: '2024-12-15 1:00 PM', descripcion: 'Fotografías corporativas' },
    { cliente: 'Sofía López', fecha: '2024-12-17 2:00 PM', descripcion: 'Sesión familiar' }
  ];

  // Notificaciones (dinámicas)
  notifications = [
    '💰 ¡Se ha depositado $15,500.00 a tu cuenta el 2024-12-08!',
    '🛠️ ¡Actualización del sistema completada el 2024-12-09!',
    '⚠️ Recuerda actualizar los datos de tus clientes antes del 2024-12-15.',
    '🎉 Nuevo cliente agendado para el 2024-12-20.',
    '📷 Las galerías de este mes están disponibles para descargar.'
  ];

  ngOnInit() {
    // Seleccionar 3 elementos aleatorios de citas
    this.citas = this.shuffle(this.citas).slice(0, 3);
    // Seleccionar 3 notificaciones aleatorias
    this.notifications = this.shuffle(this.notifications).slice(0, 3);
  }

  shuffle(array: any[]) {
    return array.sort(() => Math.random() - 0.5);
  }
}
