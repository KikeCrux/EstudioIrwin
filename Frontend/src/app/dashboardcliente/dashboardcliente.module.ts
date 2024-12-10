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
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DetalleGaleriaComponent } from './detalle-galeria/detalle-galeria.component';
import { CollageComponent } from './collage/collage.component';


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
    AgConfirmacionComponent,
    DashboardLayoutComponent,
    DetalleGaleriaComponent,
    CollageComponent,
  ],
  imports: [
    CommonModule,
    DashboardclienteRoutingModule
  ]
})
export class DashboardclienteModule { }
