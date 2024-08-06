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

  deleteFruit(fruit: Fruit): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${fruit.id}`);
  }

  updateFruit(fruit: Fruit): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${fruit.id}`, fruit);
  }

  addFruit(fruit: Fruit): Observable<Fruit> {
    return this.http.post<Fruit>(this.apiUrl, fruit);
  }

  filter(fruitFilter: any): Observable<Fruit[]> {
    let params = new HttpParams();
    params = params.set('name', fruitFilter.name);
    params = params.set('season', fruitFilter.season);
    params = params.set('pricePerKg', fruitFilter.pricePerKg);

    return this.http.get<Fruit[]>(`${this.apiUrl}/filter`, {params});
  }
}
