import { Component } from '@angular/core';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent {
  pagos = [
    { id: 1, cliente: 'Juan Pérez', fecha: '2024-12-01', monto: 15500, metodo: 'Tarjeta', estado: 'Completado' },
    { id: 2, cliente: 'María Gómez', fecha: '2024-12-02', monto: 17500, metodo: 'Transferencia', estado: 'Pendiente' },
    { id: 3, cliente: 'Carlos López', fecha: '2024-12-03', monto: 12000, metodo: 'Efectivo', estado: 'Rechazado' },
    { id: 4, cliente: 'Ana Martínez', fecha: '2024-12-04', monto: 3000, metodo: 'Tarjeta', estado: 'Completado' },
    { id: 5, cliente: 'Luis Ramírez', fecha: '2024-12-05', monto: 1200, metodo: 'Transferencia', estado: 'Pendiente' }
  ];
}
