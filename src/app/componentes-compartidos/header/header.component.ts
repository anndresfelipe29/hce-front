import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Input() rutas;
  //searchResults= [{nombre:"Inicio", url:"prueba"},];


  constructor() { }

  ngOnInit(): void {
    
   
  }

  salir(){
    
  }
 /* prueba(){
    alert("header");
    return "/prueba";
  }*/

}
