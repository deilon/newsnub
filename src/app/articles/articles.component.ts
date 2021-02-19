import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(private newsapi: NewsApiService, private route: ActivatedRoute) { }

  articles: Array<any>;
  category: string;

  ngOnInit() {
      //load articles
      this.route.params.subscribe(
        (params: Params) => {
            this.category = params['category'];
            if (this.category != null) {
              this.newsapi.initArticles(this.category).subscribe(data => this.articles = data['articles']);
            } else {
              this.category = 'general';
              this.newsapi.initArticles(this.category).subscribe(data => this.articles = data['articles']);
            }
        }
      );
  }

}
