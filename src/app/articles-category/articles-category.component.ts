import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DummyApiService } from '../dummy-api.service';
import { NewsApiService } from '../news-api.service';
import { ArticlesCategoryService } from './articles-category.service';

@Component({
  selector: 'app-articles-category',
  templateUrl: './articles-category.component.html',
  styleUrls: ['./articles-category.component.scss']
})
export class ArticlesCategoryComponent implements OnInit {

  constructor(
    private newsapi: NewsApiService, 
    private dummyApi: DummyApiService, 
    private articlesCategoryService: ArticlesCategoryService, 
    private route: ActivatedRoute) { }

  articles: Array<any>;
  category: string;

  p: number = 1;
  totalItems: number;
  itemsPerPage = 20;
  alpha2code: string = "us";

  ngOnInit() {
      this.a2cSubscription();
      // this.getCategoryArticles();
      this.getDummyCategoryArticles();
      console.log(this.alpha2code);
      console.log(this.articles);
  }

  getPage(page) {
    this.p = page;
    this.newsapi.initArticles(this.category, this.p, this.itemsPerPage, this.alpha2code)
    .subscribe((data: any) => { this.articles = data.articles, this.totalItems = data.totalResults });
  }

  a2cSubscription() {
    this.articlesCategoryService.a2cChanged.subscribe(
      (alpha2code: string) => {
        if(alpha2code != null) {
          this.alpha2code = alpha2code;
        }
      }
    );
  }

  getCategoryArticles() {
    this.route.params.subscribe(
      (params: Params) => {
          this.category = params['category'];
          this.alpha2code = params['country'];
          this.p = 1; // reset page 
          if (this.category != null) {
            this.newsapi.initArticles(this.category, this.p, this.itemsPerPage, this.alpha2code)
              .subscribe((data: any) => { this.articles = data.articles, this.totalItems = data.totalResults });
          } else {
            this.category = 'general';
            this.newsapi.initArticles(this.category, this.p, this.itemsPerPage, this.alpha2code)
              .subscribe((data: any) => { this.articles = data.articles, this.totalItems = data.totalResults });
          }
      }
    );
  }

  // Mockup API for testing
  getDummyCategoryArticles() {
    this.route.params.subscribe(
      (params: Params) => {
          this.category = params['category'];
          this.alpha2code = params['country'];
          this.p = 1; // reset page 
          if (this.category != null) {
            this.dummyApi.initArticles(this.category, this.p, this.itemsPerPage, this.alpha2code)
              .subscribe((data: any) => { this.articles = data[0].articles, this.totalItems = data[0].totalResults });
          } else {
            this.category = 'general';
            this.dummyApi.initArticles(this.category, this.p, this.itemsPerPage, this.alpha2code)
              .subscribe((data: any) => { this.articles = data[0].articles, this.totalItems = data[0].totalResults });
          }
      }
    );
  }

}
