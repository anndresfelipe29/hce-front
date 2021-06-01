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
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PaginasComponent, HistoriaCronologicaComponent, BuscarUsuarioComponent],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    ComponentesCompartidosModule,
    MatSidenavModule,
    MatListModule, 
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AgregarRegistroModule,
  ],
  exports:[
    ComponentesCompartidosModule,
  ]
})
export class PaginasModule { }
