import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from 'src/app/models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  private readonly API = 'http://localhost:8080/api/v1/planets';

  constructor(private http: HttpClient) { }

  post(planet: Planet): Observable<Planet>{
    return this.http.post<Planet>(this.API, planet);
  }

  listAll(): Observable<Planet[]> {
    return this.http.get<Planet[]>(this.API);
  }

  findById(id: number): Observable<Planet> {
    const url = `${this.API}/${id}`
    return this.http.get<Planet>(url);
  }

  delete(id: number): Observable<Planet>{
    const url = `${this.API}/${id}`;
    return this.http.delete<Planet>(url);
  }

  edit(planet: Planet): Observable<Planet>{
    const url = `${this.API}/${planet.id}`
    return this.http.put<Planet>(url, planet);
  }
}
