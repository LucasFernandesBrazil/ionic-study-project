import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Escolas', url: '/school', icon: 'school' },
    { title: 'Turmas', url: '/class', icon: 'people' },
  ];
  constructor() {}
}
