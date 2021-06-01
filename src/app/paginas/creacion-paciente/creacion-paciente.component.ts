import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-paciente',
  templateUrl: './creacion-paciente.component.html',
  styleUrls: ['./creacion-paciente.component.scss']
})
export class CreacionPacienteComponent implements OnInit {
  tipoDocumento = [
    {name:'CC'},
    {name:'TI'},
    {name:'CE'},
    {name:'RC'},
    {name:'CN'}
  ]

  sexo = [
    {name:'M'},
    {name:'F'}
  ]

  estadoCivil = [
    {name:'Soltero'},
    {name:'Casado'},
    {name:'Viudo'},
    {name:'Unión Libre'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
