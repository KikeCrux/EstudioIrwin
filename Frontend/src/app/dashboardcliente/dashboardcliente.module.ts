import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardclienteRoutingModule } from './dashboardcliente-routing.module';
import { HomeComponent } from './home/home.component';
import { SidebarClienteComponent } from '../components/sidebar-cliente/sidebar-cliente.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { BuscadorClienteComponent } from '../components/buscador-cliente/buscador-cliente.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { AgendarComponent } from './agendar/agendar.component';
import { AgConfirmacionComponent } from './ag-confirmacion/ag-confirmacion.component';


@NgModule({
  declarations: [
    HomeComponent,
    SidebarClienteComponent,
    GaleriaComponent,
    CalendarioComponent,
    TransaccionesComponent,
    BuscadorClienteComponent,
    WidgetsComponent,
    AgendarComponent,
    AgConfirmacionComponent
  ],
  imports: [
    CommonModule,
    DashboardclienteRoutingModule
  ]
})
export class DashboardclienteModule { }
