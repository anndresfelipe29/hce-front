import { Injectable } from '@angular/core';
import {Subject, Observable} from 'rxjs';

import { of } from "rxjs";


import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import {LoginObject} from '../../models/login.model';
import { Sesion } from '../../models/sesion.model';
import { Usuario } from '../../models/usuario.model';
@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private basePath = '/api/authenticate/';
  
/* constructor(){
   alert("prueba");
 }*/

  prueba(){
    alert("prueba");
  }

  constructor(private http: HttpClient,) {
    //alert("en servicio");
  }

  
  /*export class Sesion {
    public token: string;
    public usuario: Usuario;

    constructor(object: any){
        this.id= (object.usuario) ? object.usuario:null;
    }
  }*/
 //http.request('my-friends.txt').subscribe(response => this.friends = response.text());
  inicioSesion(login:LoginObject): Observable<Sesion>{  
    //return this.http.post<Sesion>(this.basePath + 'login', login);
    //{username:"pipe", password:"pipe"}   
    let sesion= new Sesion();
    sesion.token="tokencito";
    sesion.usuario= new Usuario({usuario:"usuarioPipe"});
    return of(sesion);
    //return this.http.post(this.basePath + 'login', login).pipe(map(response => this.extractData(response)));
  }

  logout(): Observable<Boolean> {
    return this.http.post<Boolean>(this.basePath + 'logout', {});
    //return this.http.post(this.basePath + 'logout', {}).subscribe( data => return data; );
    //return this.http.post(this.basePath + 'logout', {}).pipe(map(this.extractData));
    }
   
   /* private extractData(res: Response) {
    let body = res.json();
    return body;
    }*/
  
  

}
