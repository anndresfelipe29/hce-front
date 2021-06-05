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
/**Esto es mientras base de datps */
  aseguradora = [
    {name:'Seguritas'},
    {name:'SaludGracias'}
  ]

  tipoVinculacion = [
    {name:'Aportante'},
    {name:'Beneficiario'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
