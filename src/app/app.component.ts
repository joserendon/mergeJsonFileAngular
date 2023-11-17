import { Component } from '@angular/core';
import { ArbolMidasoftService } from './services/arbol-midasoft.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demoMerge';

  constructor(private arbolSvc: ArbolMidasoftService) {}
  execute() {
    console.log(this.arbolSvc.getArbol());
  }
  executeHttp() {
    console.log(this.arbolSvc.getArbolHttp());
  }
}
