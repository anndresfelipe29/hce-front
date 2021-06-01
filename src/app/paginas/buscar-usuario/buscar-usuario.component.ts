import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.scss']
})
export class BuscarUsuarioComponent implements OnInit {

  tipoDocumento = [
    {name:'CC'},
    {name:'TI'},
    {name:'CE'},
    {name:'RC'},
    {name:'CN'}
  ]

  resultado= true;

  constructor() { }

  ngOnInit(): void {
  }

}
