import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyApiService {

  constructor(private http: HttpClient) { }

  // For local host / development plan
  // initArticles(category: string, page: number, pageSize: number, country: string) {
  //   return this.http.get('http://localhost:3000/category?name=' + category);
  // }

  // for online hosting when you're not paying for business/commercial newsapi.org plan
  initArticles(category: string, page: number, pageSize: number, country: string) {
    return this.http.get('https://newsnub.herokuapp.com/category?name=' + category);
  }
  
}
