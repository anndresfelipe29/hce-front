import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }

  checkForm(form: NgForm) {
    if (form.value.Role === '') {
      alert ('Error: Debes seleccionar si registrarte como profesor o estudiante');
      return false;
    }
    if (form.value.username === '') {
      alert('Error: Nombre de usuario no puede estar vacío');
      return false;
    }
    if (form.value.username.length > 10) {
      alert('Error: El nombre de usuario debe ser de menos de 10 caracteres');
      return false;
    }
    if (form.value.names === '') {
      alert('Error: Nombres no puede estar vacío');
      return false;
    }
    if (form.value.surnames === '') {
      alert('Error: Apellidos no puede estar vacío');
      return false;
    }
    if (form.value.id_documment === '') {
      alert('Error: Documento de identidad no puede estar vacío');
      return false;
    }

    const re = /^\w+$/;
    if (!re.test(form.value.username)) {
      alert('Error: El nombre de usuario debe contenter sólo letras, números y guiones bajos.');
      return false;
    }
    console.log(form.value.password1);
    console.log(form.value.password2);
    if (form.value.password1 !== '' && form.value.password1 === form.value.password2) {
      // tslint:disable-next-line:no-shadowed-variable
      let re = /[0-9]/;
      if (!re.test(form.value.password1)) {
        alert('Error: La contraseña debe tener al menos un número');
        return false;
      }
      re = /[a-z]/;
      if (!re.test(form.value.password1)) {
        alert('Error: La contraseña debe tener al menos una letra minúscula');
        return false;
      }
      re = /[A-Z]/;
      if (!re.test(form.value.password1)) {
        alert('Error: La contraseña debe tener al menos una letra mayúscula');
        return false;
      }
    } else {
      alert('Error: Por favor verifica que ingresaste y confirmaste tu contraseña correctamente');
      return false;
    }
    return true;
  }
/*
  registrar(form: NgForm){
    return true;
  }*/


}