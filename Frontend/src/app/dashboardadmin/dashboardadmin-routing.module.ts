import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CitasComponent } from './citas/citas.component';
import { PagosComponent } from './pagos/pagos.component';
import { ServidoresComponent } from './servidores/servidores.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'citas', component: CitasComponent },
      { path: 'home', component: HomeComponent},  // Agregar la ruta a AgendarComponent
      { path: 'pagos',component: PagosComponent},
      { path: 'servidores', component: ServidoresComponent },
      { path: 'usuarios', component: UsuariosComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardadminRoutingModule { }
