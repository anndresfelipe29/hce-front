import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Sesion } from '../../models/sesion.model';
import { Usuario} from '../../models/usuario.model'
//import { Sesion } from "../../ models/sesion.model";
//import { User } from "../models/user.model";

@Injectable()
export class AlmacenamientoSesionService {

    private localStorageService;
    private sesionActual: Sesion = null;

    constructor(private router: Router) {
        this.localStorageService = sessionStorage;//localStorage;
        this.sesionActual = this.cargarDatosSesion();
    }

    setSesionACtual(sesion: Sesion): void {
        this.sesionActual = sesion;
        this.localStorageService.setItem('currentUser', JSON.stringify(sesion));
    }

    cargarDatosSesion(): Sesion {
        var sesionStr = this.localStorageService.getItem('currentUser');
        return (sesionStr) ? <Sesion>JSON.parse(sesionStr) : null;
    }

    getSesionActual(): Sesion {
        return this.sesionActual;
    }

    eliminarSesionActual(): void {
        this.localStorageService.removeItem('currentUser');
        this.sesionActual = null;
    }

    getUsuarioActual(): Usuario {
        var sesion: Sesion = this.getSesionActual();
        return (sesion && sesion.usuario) ? sesion.usuario : null;
    };

    estaAutenticado(): boolean {
        return (this.getTokenActual() != null) ? true : false;
    };

    getTokenActual(): string {
        var sesion = this.getSesionActual();
        return (sesion && sesion.token) ? sesion.token : null;
    };
    logout(): void {
        this.eliminarSesionActual();
        this.router.navigate(['/']);
    }

}