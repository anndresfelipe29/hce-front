import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AgregarRegistroHistoriaClinicaRoutingModule } from './agregar-registro-historia-clinica-routing.module';
import {AgregarRegistroHistoriaClinicaComponent} from './agregar-registro-historia-clinica.component';


@NgModule({
  declarations: [AgregarRegistroHistoriaClinicaComponent],
  imports: [
    CommonModule,
    AgregarRegistroHistoriaClinicaRoutingModule
  ]
})
export class AgregarRegistroHistoriaClinicaModule { }
