import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-procedimiento-quirurgico',
  templateUrl: './agregar-procedimiento-quirurgico.component.html',
  styleUrls: ['./agregar-procedimiento-quirurgico.component.scss']
})
export class AgregarProcedimientoQuirurgicoComponent implements OnInit {

  tipoProcedimiento=[
    {name: 'Diagnóstico'},
    {name: 'Terapéutico'},
    {name: 'Detección'}
  ];

  claseProcedimiento=[
    {name: 'Ambulatorio'},
    {name: 'Hospitalario'},
    {name: 'Urgencia'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
