import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '316c5a6943494e88ae1793572a9f21e9';

  constructor(private http: HttpClient) { }

  initSources(){
    return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
   }

  initArticles(category: string){
    return this.http.get('https://newsapi.org/v2/top-headlines?category=' + category + '&country=us&apiKey='+this.api_key);
   }


}
