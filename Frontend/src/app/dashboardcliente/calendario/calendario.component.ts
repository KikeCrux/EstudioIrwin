import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  // Propiedades
  months: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  selectedMonth: number = new Date().getMonth(); // El mes seleccionado inicialmente
  year: number = new Date().getFullYear(); // Año actual
  daysOfWeek: string[] = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  weeks: number[][] = [];
  currentDay: number = new Date().getDate();

  constructor() {}

  ngOnInit(): void {
    this.generateCalendar();
  }

  // Método para cambiar de mes
  changeMonth(direction: number): void {
    this.selectedMonth += direction;

    if (this.selectedMonth < 0) {
      this.selectedMonth = 11; // Si está en enero, va al mes diciembre
      this.year--;
    } else if (this.selectedMonth > 11) {
      this.selectedMonth = 0; // Si está en diciembre, va al mes enero
      this.year++;
    }

    this.generateCalendar(); // Regenerar el calendario al cambiar el mes
  }

  // Método para seleccionar un día
  selectDay(day: number): void {
    this.currentDay = day;
    console.log(`Día seleccionado: ${day}`);
  }

  // Método para generar las semanas del calendario
  generateCalendar(): void {
    this.weeks = [];
    const firstDayOfMonth = new Date(this.year, this.selectedMonth, 1);
    const lastDayOfMonth = new Date(this.year, this.selectedMonth + 1, 0);
    let currentDay = 1;
    
    // Asegurarse de que el mes empieza en el día correcto
    let currentWeek: number[] = new Array(this.daysOfWeek.length).fill(null);

    // Llenar el calendario con días
    while (currentDay <= lastDayOfMonth.getDate()) {
      const dayOfWeek = new Date(this.year, this.selectedMonth, currentDay).getDay();
      currentWeek[dayOfWeek] = currentDay;

      if (dayOfWeek === 6) {
        this.weeks.push(currentWeek);
        currentWeek = new Array(this.daysOfWeek.length).fill(null);
      }
      currentDay++;
    }

    // Si el mes no llena completamente la última semana, agregarla al calendario
    if (currentWeek.some(day => day !== null)) {
      this.weeks.push(currentWeek);
    }
  }
}
