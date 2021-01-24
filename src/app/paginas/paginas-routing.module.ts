import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginasComponent } from './paginas.component';
import { PruebaComponent } from '../prueba/prueba.component';
import {HistoriaCronologicaComponent} from './historia-cronologica/historia-cronologica.component';

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
    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
