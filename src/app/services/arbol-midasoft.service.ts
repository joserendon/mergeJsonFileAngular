import { Injectable } from '@angular/core';
import * as arbolNomina from '../../assets/arbol/nomina.json';
import * as arbolSst from '../../assets/arbol/Sst.json';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ArbolMidasoftService {
  private arbolBaseFolder = 'assets/arbol/';
  private Nomina = arbolNomina;
  private Sst = arbolSst;

  constructor(private http: HttpClient) {}

  getArbol(): any {
    const arbolCompleto: any[] = [];

    arbolCompleto.push(this.Nomina);
    arbolCompleto.push(this.Sst);

    return arbolCompleto;
    // this.mergeJSONFiles(this.folderPath, this.outputPath);
  }

  getArbolHttp(): any {
    const arbolCompleto: any[] = [];

    this.getSingleMenu(arbolCompleto, 'Nomina.json');
    this.getSingleMenu(arbolCompleto, 'Sst.json');

    return arbolCompleto;
  }

  private getSingleMenu(arbolCompleto: any[], jsonName: string) {
    this.http
      .get(`${this.arbolBaseFolder}${jsonName}`)
      .pipe(tap((menu) => arbolCompleto.push(menu)))
      .subscribe();
  }
}
