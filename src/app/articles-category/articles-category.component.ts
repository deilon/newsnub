import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DummyApiService } from '../dummy-api.service';
import { NewsApiService } from '../news-api.service';
import { ArticlesCategoryService } from './articles-category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-category',
  templateUrl: './articles-category.component.html',
  styleUrls: ['./articles-category.component.scss']
})
export class ArticlesCategoryComponent implements OnInit, OnDestroy {

  articlesCategorySubscription: Subscription;

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
  countryCode: string;

  ngOnInit() {
      this.checkCurrentCountry();
      this.countryCodeSubscription();
      this.getCategoryArticles();
      // this.getDummyCategoryArticles();
  }

  getPage(page) {
    this.p = page;
    this.newsapi.initArticles(this.category, this.p, this.itemsPerPage, this.countryCode)
    .subscribe((data: any) => { this.articles = data.articles, this.totalItems = data.totalResults });
  }

  checkCurrentCountry() {
    if (localStorage.getItem('countryCode') == null) {
      this.countryCode = 'us';
    } else {
      this.countryCode = localStorage.getItem('countryCode');
    }
  }

  // Subscribe to changes made on country
  countryCodeSubscription() {
    this.articlesCategoryService.countryCodeChanged.subscribe(
      (alpha2code: string) => {
        if(alpha2code != null) {
          localStorage.setItem('countryCode', alpha2code);
          this.countryCode = localStorage.getItem('countryCode');  
          this.getCategoryArticles(); // Get category articles with country updated
        }
      }
    );
  }

  getCategoryArticles() {
    this.articlesCategorySubscription = this.route.params.subscribe(
      (params: Params) => {
          this.category = params['category'];
          this.p = 1; // reset page 
          if (this.category != null) {
            this.newsapi.initArticles(this.category, this.p, this.itemsPerPage, this.countryCode)
              .subscribe((data: any) => { this.articles = data.articles, this.totalItems = data.totalResults });
          } else {
            this.category = 'general';
            this.newsapi.initArticles(this.category, this.p, this.itemsPerPage, this.countryCode)
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
          this.p = 1; // reset page 
          if (this.category != null) {
            this.dummyApi.initArticles(this.category, this.p, this.itemsPerPage, this.countryCode)
              .subscribe((data: any) => { this.articles = data[0].articles, this.totalItems = data[0].totalResults });
          } else {
            this.category = 'general';
            this.dummyApi.initArticles(this.category, this.p, this.itemsPerPage, this.countryCode)
              .subscribe((data: any) => { this.articles = data[0].articles, this.totalItems = data[0].totalResults });
          }
      }
    );
  }

  ngOnDestroy() {
    this.articlesCategorySubscription.unsubscribe();
  }

}
