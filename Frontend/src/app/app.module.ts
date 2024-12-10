import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { PortafolioDetailComponent } from './pages/portafolio-detail/portafolio-detail.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BuscadorAdminComponent } from './components/buscador-admin/buscador-admin.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { PreegaleriaComponent } from './components/preegaleria/preegaleria.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AcercaDeComponent,
    PortafolioComponent,
    PortafolioDetailComponent,
    ServiciosComponent,
    BlogComponent,
    ContactanosComponent,
    LoginComponent,
    RegistrarComponent,
    CalendarioComponent,
    PreegaleriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
