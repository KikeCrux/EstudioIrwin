import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  citas = [
    { fecha: '20 Nov, 2024', hora: '2:15 PM', lugar: 'Estudio Fotográfico' },
    { fecha: '25 Nov, 2024', hora: '10:00 AM', lugar: 'Estudio Fotográfico' },
    { fecha: '2 Dic, 2024', hora: '5:30 PM', lugar: 'Estudio Fotográfico' },
  ];

  proximaCita = { fecha: '20 Nov, 2024', hora: '14:15 PM', lugar: 'Estudio Fotográfico' };
}
