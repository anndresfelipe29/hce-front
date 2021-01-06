import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
//material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports:[FooterComponent,HeaderComponent,] //,MatToolbarModule
})
export class ComponentesCompartidosModule { }
