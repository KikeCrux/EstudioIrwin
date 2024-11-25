import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { PortafolioDetailComponent } from './pages/portafolio-detail/portafolio-detail.component';

const routes: Routes = [
  { path: '', component: AcercaDeComponent },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
