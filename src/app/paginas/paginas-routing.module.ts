import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginasComponent } from './paginas.component';
import { PruebaComponent } from '../prueba/prueba.component'

const routes: Routes = [{
  path: '',
  component: PaginasComponent,
  children: [
    {
      path: 'prueba',
      component: PruebaComponent,
    }
  ]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
