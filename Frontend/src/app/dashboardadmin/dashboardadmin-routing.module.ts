import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { PagosComponent } from './pagos/pagos.component';
import { ServidoresComponent } from './servidores/servidores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardadminLayoutComponent } from './dashboardadmin-layout/dashboardadmin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: DashboardadminLayoutComponent },
      { path: 'citas', component: CitasComponent },
      { path: 'pagos', component: PagosComponent },
      { path: 'servidores', component: ServidoresComponent },
      { path: 'usuarios', component: UsuariosComponent },
    ]
  },
  { path: '**', redirectTo: '' } // Ruta comodín
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardadminRoutingModule { }
