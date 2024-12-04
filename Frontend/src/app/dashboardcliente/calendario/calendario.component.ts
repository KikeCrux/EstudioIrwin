import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  currentDay!: number;
  month!: string;
  year!: number;
  daysOfWeek: string[] = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  weeks: (number | null)[][] = [];

  ngOnInit(): void {
    this.initCalendar();
  }

  initCalendar(): void {
    const today = new Date();
    this.currentDay = today.getDate();
    this.month = this.getMonthName(today.getMonth());
    this.year = today.getFullYear();

    const firstDayOfMonth = new Date(this.year, today.getMonth(), 1);
    const lastDayOfMonth = new Date(this.year, today.getMonth() + 1, 0);
    const startDay = firstDayOfMonth.getDay(); // Día de la semana en que comienza el mes
    const totalDays = lastDayOfMonth.getDate();

    // Crear semanas
    this.weeks = [];
    let week: (number | null)[] = [];

    // Añadir días vacíos al inicio del mes
    for (let i = 0; i < startDay; i++) {
      week.push(null); // Días vacíos
    }

    // Añadir días del mes
    for (let day = 1; day <= totalDays; day++) {
      week.push(day);
      if (week.length === 7) {
        this.weeks.push(week); // Añadir la semana completa
        week = []; // Limpiar la semana para la siguiente
      }
    }

    // Añadir la última semana si es necesario
    if (week.length > 0) {
      this.weeks.push(week);
    }
  }

  getMonthName(month: number): string {
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return months[month];
  }
}
