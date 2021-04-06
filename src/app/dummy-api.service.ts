import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(private http: HttpClient) { }

  initArticles(category: string, page: number, pageSize: number, country: string) {
    return this.http.get('http://localhost:3000/category?name=' + category);
  }

}
