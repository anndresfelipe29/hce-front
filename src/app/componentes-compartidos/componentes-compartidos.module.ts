import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
//material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, MenuComponent],
  imports: [
    RouterModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    
  ],
  exports:[FooterComponent,HeaderComponent,MenuComponent,] //,MatToolbarModule
})
export class ComponentesCompartidosModule { }
