import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatBreedService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getBreeds(): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds`);
  }

  getBreedsById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds/${id}`);
  }

  searchBreed(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/breeds/search/q=${query}`);
  }

  getImagesByBreedId(breedId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/imagesbybreedid?breed_id=${breedId}`);
  }
}
