import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';
import { ComponentesCompartidosModule } from '../componentes-compartidos/componentes-compartidos.module';

//material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [PaginasComponent],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    ComponentesCompartidosModule,
    MatSidenavModule,
    MatListModule,
  ],
  exports:[
    ComponentesCompartidosModule,
  ]
})
export class PaginasModule { }
