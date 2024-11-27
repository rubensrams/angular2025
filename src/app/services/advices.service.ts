import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advice } from '../models/advice';

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {

  private url: string = 'http://localhost:8080/AnguReact/api/advice/getAdvices';

  constructor(private http: HttpClient) { }

  findAll(): Observable<Advice[]> {
    return this.http.get<Advice[]>(this.url);
  }


}
