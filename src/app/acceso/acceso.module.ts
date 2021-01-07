import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoRoutingModule } from './acceso-routing.module';
import { LoginComponent } from './login/login.component';
import { AccesoComponent } from './acceso.component';
import { ComponentesCompartidosModule } from '../componentes-compartidos/componentes-compartidos.module';
//meterial
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrarComponent } from './registrar/registrar.component';


@NgModule({
  declarations: [LoginComponent, AccesoComponent, RegistrarComponent],
  imports: [
    CommonModule,
    AccesoRoutingModule,
    ComponentesCompartidosModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ComponentesCompartidosModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AccesoModule { }
