import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { PaginasComponent } from './paginas.component';
import { ComponentesCompartidosModule } from '../componentes-compartidos/componentes-compartidos.module';
import { AgregarRegistroModule} from '../agregar-registro/agregar-registro.module';

//material
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { HistoriaCronologicaComponent } from './historia-cronologica/historia-cronologica.component';
import { AgregarRegistroHistoriaClinicaComponent } from './agregar-registro-historia-clinica/agregar-registro-historia-clinica.component';



@NgModule({
  declarations: [PaginasComponent, HistoriaCronologicaComponent],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    ComponentesCompartidosModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AgregarRegistroModule,
  ],
  exports:[
    ComponentesCompartidosModule,
  ]
})
export class PaginasModule { }
