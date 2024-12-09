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



@NgModule({
  declarations: [
    CitasComponent,
    HomeComponent,
    PagosComponent,
    ServidoresComponent,
    UsuariosComponent,
    BuscadorAdminComponent
  ],
  imports: [
    CommonModule,
    DashboardadminRoutingModule
  ]
})
export class DashboardadminModule { }
