import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.scss']
})
export class PaginasComponent implements OnInit {

  fillerNav= ["Usuario","Historia Clinica","Dar acceso","Configuración","5sdsdsdsfsdfsfsdsdsds", "texto del menu", "texto super completo muy largo"];

  rutas = [
    {
      nombre: "salir",
      url: "../prueba"
    },
    
  ];

  rutasMenu = [
    {
      nombre: "Inicio",
      url: "./prueba",
      icono: "home",
    },
    {
      nombre: "Buscar paciente",
      url: "./buscar-usuario",
      icono: "search",
    },
    { 
      nombre: "Usuario",
      url:"./prueba",
      icono: "account_circle",
    },
    { 
      nombre: "Historia Clinica",
      url:"./historia-cronologica",
      icono: "assignment",
    },
    { 
      nombre: "Agregar Registro HC",
      url:"./agregar-registro",
      icono: "assignment",
    },
    { 
      nombre: "Dar acceso",
      url:"./prueba",
      icono: "input",
    },
    { 
      nombre: "Configuración",
      url:"./prueba",
      icono: "settings",
    },    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
