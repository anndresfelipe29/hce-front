import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginasComponent } from './paginas.component';
import { PruebaComponent } from '../prueba/prueba.component';
import { CreacionPacienteComponent } from './creacion-paciente/creacion-paciente.component'
import { HistoriaCronologicaComponent } from './historia-cronologica/historia-cronologica.component';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';

const routes: Routes = [{
  path: '',
  component: PaginasComponent,
  children: [
    {
      path: 'prueba',
      component: PruebaComponent,
    },
    {
      path: 'historia-cronologica',
      component: HistoriaCronologicaComponent,
    },
    {
      path: 'creacion',
      component: CreacionPacienteComponent,
    },
    {
      path: 'buscar-usuario',
      component: BuscarUsuarioComponent,
    },
    {
      path: 'agregar-registro',
      loadChildren: () => import('./agregar-registro-historia-clinica/agregar-registro-historia-clinica.module').then(m => m.AgregarRegistroHistoriaClinicaModule),
      //component: AgregarRegistroHistoriaClinicaComponent,
    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
