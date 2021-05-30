import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-opciones',
  templateUrl: './menu-opciones.component.html',
  styleUrls: ['./menu-opciones.component.scss']
})
export class MenuOpcionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opciones = [
    {
      nombre: "Consulta médica",
      url: "./agregar-consulta",
      icono: "health_and_safety",
    },
    { 
      nombre: "Atención de urgencias",
      url:"./prueba",
      icono: "account_circle",
    },
    { 
      nombre: "Solicitud de pruebas de laboratorio",
      url:"./historia-cronologica",
      icono: "assignment",
    },
    { 
      nombre: "Resultados de pruebas de laboratorio",
      url:"./agregar-registro",
      icono: "assignment",
    },
    { 
      nombre: "Inmunizaciones",
      url:"./prueba",
      icono: "input",
    },
    { 
      nombre: "Configuración",
      url:"./prueba",
      icono: "settings",
    },    
  ];


}
