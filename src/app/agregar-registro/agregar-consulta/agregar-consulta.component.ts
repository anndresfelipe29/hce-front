import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-agregar-consulta',
  templateUrl: './agregar-consulta.component.html',
  styleUrls: ['./agregar-consulta.component.scss']
})
export class AgregarConsultaComponent implements OnInit {

  especialidades=[
    {name: 'medicina general'},
    {name: 'pediatria'}
  ]



  constructor() { }

  ngOnInit(): void {
  }

  email = new FormControl('', [Validators.required, Validators.email]);



}
