import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

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
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AccesoModule,
    ComponentesCompartidosModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
