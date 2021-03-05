import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.scss']
})
export class ArticlesSearchComponent implements OnInit {

  articles: Array<any>;
  category = "Everything";

  constructor(public newsapi: NewsApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    
    this.route.params.subscribe(
      (params: Params) => {
        this.newsapi.searchArticle(params['query']).subscribe(data => this.articles = data['articles']);
      }
    );
  }

}
