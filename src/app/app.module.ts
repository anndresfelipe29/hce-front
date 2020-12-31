import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//importaciones propias
import {AccesoModule} from './acceso/acceso.module';
import { PruebaComponent } from './prueba/prueba.component';
import { ComponentesCompartidosModule } from './componentes-compartidos/componentes-compartidos.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccesoModule,
    ComponentesCompartidosModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
