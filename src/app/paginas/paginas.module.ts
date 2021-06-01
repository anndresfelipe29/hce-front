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
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from "@angular/material-moment-adapter";

import { HistoriaCronologicaComponent } from './historia-cronologica/historia-cronologica.component';
import { CreacionPacienteComponent } from './creacion-paciente/creacion-paciente.component';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [PaginasComponent, HistoriaCronologicaComponent, BuscarUsuarioComponent, CreacionPacienteComponent],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    ComponentesCompartidosModule,
    MatSidenavModule,
    MatListModule, 
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatButtonModule,
    AgregarRegistroModule,
  ],
  exports:[
    ComponentesCompartidosModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class PaginasModule { }
