export interface Cita {
    id: number; // Identificador único
    cliente: string; // Nombre del cliente
    fecha: string; // Fecha y hora de la cita
    descripcion: string; // Descripción de la cita
    estado: 'Pendiente' | 'Completada' | 'Cancelada'; // Estado de la cita
  }
  