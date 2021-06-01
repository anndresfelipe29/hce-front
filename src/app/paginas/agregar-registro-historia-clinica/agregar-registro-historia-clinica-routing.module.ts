import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AgregarRegistroHistoriaClinicaComponent} from './agregar-registro-historia-clinica.component';
import {AgregarConsultaComponent} from '../../agregar-registro/agregar-consulta/agregar-consulta.component';
import {MenuOpcionesComponent} from '../../agregar-registro/menu-opciones/menu-opciones.component';
import {AgregarProcedimientoQuirurgicoComponent} from '../../agregar-registro/agregar-procedimiento-quirurgico/agregar-procedimiento-quirurgico.component';

const routes: Routes = [{
  path: '',
  component: AgregarRegistroHistoriaClinicaComponent,  
  children:[
    {
      path: '',
      component: MenuOpcionesComponent,

    },
    {
      path:'agregar-consulta',
      component: AgregarConsultaComponent,
      
    },
    {
      path:'procedimiento-quirurgico',
      component: AgregarProcedimientoQuirurgicoComponent,

    },
  ]


}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgregarRegistroHistoriaClinicaRoutingModule { }
