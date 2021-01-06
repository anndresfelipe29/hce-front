import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Sesion } from '../../models/sesion.model';
import {Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {LoginObject} from '../../models/login.model';

@Injectable()
export class LoginService {

  private basePath = '/api/authenticate/';
  

  constructor(private http: HttpClient) {}

  inicioSesion(login:LoginObject): Observable<Sesion>{
  
    return this.http.post(this.basePath + 'login', login).pipe(map(this.extractData));
  }

  logout(): Observable<Boolean> {
    return this.http.post(this.basePath + 'logout', {}).pipe(map(this.extractData));
    }
   
    private extractData(res: Response) {
    let body = res.json();
    return body;
    }
  
  

}
