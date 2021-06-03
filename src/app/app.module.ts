import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/top-nav/top-nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Header2Component } from './components/header/header.component';
import { IndexContainerComponent } from './components/index-container/index-container.component';
import { IndexComponent } from './components/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EquipoComponent } from './components/equipo/equipo.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductoComponent } from './components/producto/producto.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductosComponent } from './components/productos/productos.component';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  scrollYMarginOffset: 8,
  minScrollbarLength: 40,
  wheelPropagation: false
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    Header2Component,
    IndexComponent,
    IndexContainerComponent,
    EquipoComponent,
    ProductoComponent,
    ProductosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot({
      timeOut: 7000 
    }),
    NgbModule,
    PerfectScrollbarModule,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
  }
}
