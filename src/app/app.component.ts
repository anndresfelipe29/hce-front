import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet><app-footer></app-footer>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hce';
}
//<app-header></app-header>