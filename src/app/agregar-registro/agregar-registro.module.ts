import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import { AgregarRegistroRoutingModule } from './agregar-registro-routing.module';
import { AgregarConsultaComponent } from './agregar-consulta/agregar-consulta.component';

//material
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MenuOpcionesComponent } from './menu-opciones/menu-opciones.component'
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [AgregarConsultaComponent, MenuOpcionesComponent],
  imports: [
    CommonModule,
    AgregarRegistroRoutingModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    FormsModule
  ],
  exports: [AgregarConsultaComponent]
})
export class AgregarRegistroModule { }
