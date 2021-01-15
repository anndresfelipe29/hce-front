import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.scss']
})
export class PaginasComponent implements OnInit {

  fillerNav= ["Inicio","Usuario","Historia Clinica","Dar acceso","Configuración",];

  rutas = [
    {
      nombre: "Inicio",
      url: "./prueba"
    },
    { 
      nombre: "Usuario",
      url:"./prueba"
    },
    { 
      nombre: "Historia Clinica",
      url:"./historia-cronologica"
    },
    { 
      nombre: "Dar acceso",
      url:"./prueba"
    },
    { 
      nombre: "Configuración",
      url:"./prueba"
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
