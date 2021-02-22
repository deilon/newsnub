import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-articles-source',
  templateUrl: './articles-source.component.html',
  styleUrls: ['./articles-source.component.scss']
})
export class ArticlesSourceComponent implements OnInit {

  articles: Array<any>;
  category = "Top Headline";

  constructor(private newsapi: NewsApiService, private route: ActivatedRoute) { }

  ngOnInit() {
      //load articles
      this.route.params.subscribe(
        (params: Params) => {
              this.newsapi.initSourceArticles(params['source']).subscribe(data => this.articles = data['articles']);
        }
      );
  }

}
