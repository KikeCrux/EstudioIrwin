import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardadminRoutingModule } from './dashboardadmin-routing.module';
import { DashboardadminLayoutComponent } from './dashboardadmin-layout/dashboardadmin-layout.component';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { PagosComponent } from './pagos/pagos.component';
import { ServidoresComponent } from './servidores/servidores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SidebarAdminComponent } from '../components/sidebar-admin/sidebar-admin.component';
import { BuscadorAdminComponent } from '../components/buscador-admin/buscador-admin.component';

@NgModule({
  declarations: [
    DashboardadminLayoutComponent,
    HomeComponent,
    CitasComponent,
    PagosComponent,
    ServidoresComponent,
    UsuariosComponent,
    SidebarAdminComponent,
    BuscadorAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardadminRoutingModule
  ]
})
export class DashboardadminModule { }
