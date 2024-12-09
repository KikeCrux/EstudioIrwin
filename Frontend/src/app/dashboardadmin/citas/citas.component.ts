import { Component } from '@angular/core';
import { Cita } from './cita.model'; // Importamos el modelo de datos

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {
  // Lista ampliada de citas
  citas: Cita[] = [
    { id: 1, cliente: 'Juan Pérez', fecha: '2024-12-10 10:00', descripcion: 'Reunión para entrega de trabajo', estado: 'Pendiente' },
    { id: 2, cliente: 'María Gómez', fecha: '2024-12-11 15:00', descripcion: 'Revisión de contrato', estado: 'Completada' },
    { id: 3, cliente: 'Carlos López', fecha: '2024-12-12 09:00', descripcion: 'Sesión de Fotos', estado: 'Cancelada' },
    { id: 4, cliente: 'Ana Ramírez', fecha: '2024-12-13 11:30', descripcion: 'Evaluación de proyecto', estado: 'Pendiente' },
    { id: 5, cliente: 'Luis Fernández', fecha: '2024-12-14 13:00', descripcion: 'Reunión de seguimiento', estado: 'Completada' },
    { id: 6, cliente: 'Sofía Torres', fecha: '2024-12-15 14:00', descripcion: 'Entrega de resultados', estado: 'Cancelada' },
    { id: 7, cliente: 'Pedro Sánchez', fecha: '2024-12-16 16:00', descripcion: 'Cita médica', estado: 'Pendiente' },
    { id: 8, cliente: 'Elena Gómez', fecha: '2024-12-17 08:30', descripcion: 'Firma de documentos', estado: 'Completada' },
    { id: 9, cliente: 'Raúl Morales', fecha: '2024-12-18 17:30', descripcion: 'Capacitación', estado: 'Cancelada' }
  ];

  constructor() { }
}
