import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { AgendarComponent } from './agendar/agendar.component'; // Agregar la importación de AgendarComponent
import { AgConfirmacionComponent } from './ag-confirmacion/ag-confirmacion.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DetalleGaleriaComponent } from './detalle-galeria/detalle-galeria.component';
import { CollageComponent } from './collage/collage.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'home', component: WidgetsComponent },
      { path: 'galeria', component: GaleriaComponent },
      { path: 'detalle', component: DetalleGaleriaComponent },
      { path: 'collage', component: CollageComponent },
      { path: 'calendario', component: CalendarioComponent },
      { path: 'agendar', component: AgendarComponent },
      { path: 'agconfirmacion', component: AgConfirmacionComponent },
      { path: 'transacciones', component: TransaccionesComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }, { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardclienteRoutingModule { }
