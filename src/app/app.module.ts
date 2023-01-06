import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/header/header.component';
import { FooterComponent } from './componets/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { LandingMonserratComponent } from './pages/landing-monserrat/landing-monserrat.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { SwiperModule } from 'swiper/angular';
import { CategoriasComponent } from './pages/landing-monserrat/categorias/categorias.component';
import { ColeccionesComponent } from './pages/landing-monserrat/colecciones/colecciones.component';
import { BannerPortadaComponent } from './pages/landing-monserrat/banner-portada/banner-portada.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LandingMonserratComponent,
    NosotrosComponent,
    CategoriasComponent,
    ColeccionesComponent,
    BannerPortadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
