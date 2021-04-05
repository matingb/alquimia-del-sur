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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
    Header2Component,
    IndexComponent,
    IndexContainerComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 6000 
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
  }
}
