import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccesoComponent} from './acceso.component'
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { CreacionPacienteComponent } from '../paginas/creacion-paciente/creacion-paciente.component';

const routes: Routes = [{
  path:'',
  component:AccesoComponent,
  children:[
    {
    path:'login',
    component: LoginComponent,
    },
    {path: 'registrar', 
    component: RegistrarComponent,
  },

    {path:'', redirectTo:'login',pathMatch: 'full'},
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoRoutingModule { }
