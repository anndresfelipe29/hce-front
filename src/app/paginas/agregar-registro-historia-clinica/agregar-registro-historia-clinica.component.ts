import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agregar-registro-historia-clinica',
  templateUrl: './agregar-registro-historia-clinica.component.html',
  styleUrls: ['./agregar-registro-historia-clinica.component.scss']
})
export class AgregarRegistroHistoriaClinicaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  opciones = [
    {
      nombre: "Consulta médica",
      url: "./prueba",
      icono: "home",
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
