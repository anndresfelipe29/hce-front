import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AccesoRoutingModule } from './acceso-routing.module';
import { LoginComponent } from './login/login.component';
import { AccesoComponent } from './acceso.component';
import { ComponentesCompartidosModule } from '../componentes-compartidos/componentes-compartidos.module';
//meterial
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegistrarComponent } from './registrar/registrar.component';
import { AlmacenamientoSesionService} from '../logic/services/login/almacenamiento-sesion.service';
import { HttpClientModule } from '@angular/common/http';

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
    MatToolbarModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ComponentesCompartidosModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers:[AlmacenamientoSesionService],
})
export class AccesoModule { }
