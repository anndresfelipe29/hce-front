import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';
import { ComponentesCompartidosModule } from '../componentes-compartidos/componentes-compartidos.module';


@NgModule({
  declarations: [PaginasComponent],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    ComponentesCompartidosModule,
  ],
  exports:[
    ComponentesCompartidosModule,
  ]
})
export class PaginasModule { }
