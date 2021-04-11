import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  api_key = '4d25e3a2d2334c299a5e47b6a037ace1';
  

  constructor(private http: HttpClient) { }

  initSources() {
      return this.http.get('https://newsapi.org/v2/sources?language=en&apiKey='+this.api_key);
  }

  initArticles(category: string, page: number, pageSize: number, country: string) {
      return this.http.get('https://newsapi.org/v2/top-headlines?category=' + category +'&page='+page+'&pageSize='+pageSize+'&country='+country+'&apiKey='+this.api_key);
  }

   initSourceArticles(source: string, page: number, pageSize: number) {
      return this.http.get('https://newsapi.org/v2/top-headlines?sources='+source+'&page='+page+'&pageSize='+pageSize+'&apiKey='+this.api_key);
   }

   searchArticle(query: string, page: number, pageSize: number) {
      return this.http.get('https://newsapi.org/v2/everything?q='+query+'&page='+page+'&pageSize='+pageSize+'&apiKey='+this.api_key)
         .pipe(
            map(
               (response: HttpResponse<any>) => {
                  return response;
              }
            )
         );
   }

}
