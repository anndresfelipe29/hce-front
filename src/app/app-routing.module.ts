import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {PruebaComponent} from './prueba/prueba.component'

const routes: Routes = [
  {
    path: 'acceso',
    loadChildren: ()=> import('./acceso/acceso.module').then(m=> m.AccesoModule)
  },
  {path: 'prueba', component: PruebaComponent},
  {path:'', redirectTo:'prueba',pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
