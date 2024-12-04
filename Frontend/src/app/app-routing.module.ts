import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { PortafolioDetailComponent } from './pages/portafolio-detail/portafolio-detail.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { BlogComponent } from './pages/blog/blog.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acercaDe', component: AcercaDeComponent },
  { path: 'servicio', component: ServiciosComponent },
  { path: 'contactanos', component: ContactanosComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistrarComponent },
  { path: 'calendario', component: CalendarioComponent },
  { path: 'portafolio', component: PortafolioComponent },
  {
    path: 'dashboardC',
    loadChildren: () =>
      import('./dashboardcliente/dashboardcliente.module').then(
        (m) => m.DashboardclienteModule
      )
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
