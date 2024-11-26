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
    ContactanosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
