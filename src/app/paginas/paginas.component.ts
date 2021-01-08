import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.sass']
})
export class PaginasComponent implements OnInit {

  rutas = [
    {
      nombre: "salir",
      url: "../prueba"
    },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
