import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccesoComponent} from './acceso.component'
import { LoginComponent } from './login/login.component';

const routes: Routes = [{
  path:'',
  component:AccesoComponent,
  children:[
    {
    path:'login',
    component: LoginComponent,
    },
    {path:'', redirectTo:'login',pathMatch: 'full'},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoRoutingModule { }
