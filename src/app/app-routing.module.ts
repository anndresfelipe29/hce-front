import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PruebaComponent } from './prueba/prueba.component'
import { AuthorizatedGuard } from './logic/services/login/GuardAutorizaciones.guard';

const routes: Routes = [
  {
    path: 'acceso',
    loadChildren: () => import('./acceso/acceso.module').then(m => m.AccesoModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./paginas/paginas.module').then(m => m.PaginasModule),
    canActivate: [AuthorizatedGuard]
  },
  { path: 'prueba', component: PruebaComponent },

  //{path:'', redirectTo:'prueba',pathMatch: 'full'},
  { path: '', redirectTo: 'acceso', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
