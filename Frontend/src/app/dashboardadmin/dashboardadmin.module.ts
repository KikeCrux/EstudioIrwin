import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardadminRoutingModule } from './dashboardadmin-routing.module';
import { CitasComponent } from './citas/citas.component';
import { HomeComponent } from './home/home.component';
import { PagosComponent } from './pagos/pagos.component';
import { ServidoresComponent } from './servidores/servidores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BuscadorAdminComponent } from '../components/buscador-admin/buscador-admin.component';
import { RouterModule } from '@angular/router';
import { DashboardadminLayoutComponent } from './dashboardadmin-layout/dashboardadmin-layout.component';
import { SidebarAdminComponent } from '../components/sidebar-admin/sidebar-admin.component';



@NgModule({
  declarations: [
    HomeComponent,
    SidebarAdminComponent,
    CitasComponent,
    PagosComponent,
    ServidoresComponent,
    UsuariosComponent,
    BuscadorAdminComponent,
    DashboardadminLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardadminRoutingModule
  ]
})
export class DashboardadminModule { }
