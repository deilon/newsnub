import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-articles-category',
  templateUrl: './articles-category.component.html',
  styleUrls: ['./articles-category.component.scss']
})
export class ArticlesCategoryComponent implements OnInit {

  constructor(private newsapi: NewsApiService, private route: ActivatedRoute) { }

  articles: Array<any>;
  category: string;

  p: number = 1;
  totalItems: number;
  itemsPerPage = 20

  ngOnInit() {
      this.route.params.subscribe(
        (params: Params) => {
            this.category = params['category'];
            this.p = 1; // reset page 
            if (this.category != null) {
              this.newsapi.initArticles(this.category, this.p, this.itemsPerPage)
                .subscribe((data: any) => { this.articles = data.articles, this.totalItems = data.totalResults });
            } else {
              this.category = 'general';
              this.newsapi.initArticles(this.category, this.p, this.itemsPerPage)
                .subscribe((data: any) => { this.articles = data.articles, this.totalItems = data.totalResults });
            }
        }
      );
  }

  getPage(page) {
    this.p = page;
    this.newsapi.initArticles(this.category, this.p, this.itemsPerPage)
    .subscribe((data: any) => { this.articles = data.articles, this.totalItems = data.totalResults });
  }

}
