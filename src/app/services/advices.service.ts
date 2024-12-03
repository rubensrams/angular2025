import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Advice } from '../models/advice';
import { URL_MICROSERVICIOS } from '../config/config';
import { Tema } from '../models/tema';

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {

  constructor(private http: HttpClient) { }
 
  findAll(): Observable<Advice[]> {
    const enpoint = URL_MICROSERVICIOS + '/advice/getAdvices';
    return this.http.get<Advice[]>(enpoint);
  }

  getThems(): Observable<Tema[]> {
    const enpoint = URL_MICROSERVICIOS + '/thems/getThems';
    return this.http.get<Tema[]>(enpoint);
  }

  /*getThems(): Observable<any> {
    const enpoint = URL_MICROSERVICIOS + '/thems/getThems';
    return this.http.get(enpoint).pipe(
      map((response: any) => response.respuesta as Categoria[])
    )
  } */


}
