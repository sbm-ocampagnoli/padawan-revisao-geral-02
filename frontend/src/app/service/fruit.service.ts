import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Fruit } from '../components/fruit';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FruitService {

  private apiUrl = environment.apiURL + '/fruits';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Fruit[]> {
    return this.http.get<Fruit[]>(this.apiUrl);
  }

  deleteFruit(id: number): Observable<void> {
    // debugger
    // let params = new HttpParams();
    // params = params.set('id', id);
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
