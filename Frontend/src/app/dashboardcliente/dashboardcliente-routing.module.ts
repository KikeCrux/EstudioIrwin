import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { WidgetsComponent } from './widgets/widgets.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home', component: WidgetsComponent },
      { path: 'galeria', component: GaleriaComponent },
      { path: 'calendario', component: CalendarioComponent },
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
