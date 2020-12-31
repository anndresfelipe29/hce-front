import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoRoutingModule } from './acceso-routing.module';
import { LoginComponent } from './login/login.component';
import { AccesoComponent } from './acceso.component';
import { ComponentesCompartidosModule } from '../componentes-compartidos/componentes-compartidos.module';


@NgModule({
  declarations: [LoginComponent, AccesoComponent],
  imports: [
    CommonModule,
    AccesoRoutingModule,
    ComponentesCompartidosModule
  ]
})
export class AccesoModule { }
