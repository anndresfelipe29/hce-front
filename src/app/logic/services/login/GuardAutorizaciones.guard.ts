import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AlmacenamientoSesionService} from './almacenamiento-sesion.service'
//import {StorageService} from "../services/storage.service";

@Injectable()
export class AuthorizatedGuard implements CanActivate {

  constructor(private router: Router,
              private almacenamientoSesionService: AlmacenamientoSesionService) { 
                console.log("guard");
              }

  canActivate() {
    console.log("can activate ");
    console.log(this.almacenamientoSesionService.estaAutenticado());
    if (this.almacenamientoSesionService.estaAutenticado()) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['../prueba']);
    return false;
  }
}