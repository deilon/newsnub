import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-articles-source',
  templateUrl: './articles-source.component.html',
  styleUrls: ['./articles-source.component.scss']
})
export class ArticlesSourceComponent implements OnInit {

  source: string;
  articles: Array<any>;
  category = "Top Headline";
  pageNumber: number = 1;
  totalItems: number;
  itemsPerPage = 20;

  constructor(private newsapi: NewsApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSourceArticles();
  }

  getSourceArticles() {
    this.route.params.subscribe(
      (params: Params) => {
          this.newsapi.initSourceArticles(params['source'], this.pageNumber, this.itemsPerPage)
          .subscribe(
            (data: any) => {
              this.articles = data.articles,
              this.totalItems = data.totalResults
            }
          );
          this.source = params['source']
      }
    );
  }

  getPage(page) {
    this.pageNumber = page;
    this.newsapi.initSourceArticles(this.source, this.pageNumber, this.itemsPerPage)
    .subscribe(
      (data: any) => {
        this.articles = data.articles, 
        this.totalItems = data.totalResults
      }
    );
  }

}
