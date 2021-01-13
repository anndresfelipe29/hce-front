import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginas',
  templateUrl: './paginas.component.html',
  styleUrls: ['./paginas.component.scss']
})
export class PaginasComponent implements OnInit {

  fillerNav= [1,2,3,4,5, "texto del menu", "texto super completo muy largo"];

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
