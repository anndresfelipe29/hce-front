import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  hide=true;
  constructor() { }

  ngOnInit(): void {
  }

  clickAceptar(){
    let usuario = (<HTMLInputElement>document.getElementById("usuario")).value;
    let password = (<HTMLInputElement>document.getElementById("password")).value;
    if(usuario==''){
      alert("Ingrese usuario");
    }
    else{
      if(password==''){
        alert("Ingrese contraseña");
      }
      else{
          console.log('funciona');
          //pasar datos a back
      }
    }
  }

  clickCancelar(){
    //
  }

}
