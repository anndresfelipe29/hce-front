import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DatosPersonalesComponent } from './historia-clinica/datos-personales/datos-personales.component';

//material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { AntecedentesComponent } from './historia-clinica/antecedentes/antecedentes.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, DatosPersonalesComponent, AntecedentesComponent,],
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatExpansionModule,
    
  ],
  exports:[FooterComponent,HeaderComponent,DatosPersonalesComponent, AntecedentesComponent] //,MatToolbarModule
})
export class ComponentesCompartidosModule { }
