import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Escolas', url: '/folder/Escolas', icon: 'school' },
    { title: 'Turmas', url: '/folder/Turmas', icon: 'people' },
  ];
  constructor() {}
}
