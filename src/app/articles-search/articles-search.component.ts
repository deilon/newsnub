import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-articles-search',
  templateUrl: './articles-search.component.html',
  styleUrls: ['./articles-search.component.scss']
})
export class ArticlesSearchComponent implements OnInit {

  query: string;
  articles: Array<any>;
  category = "Everything";
  pageNumber: number = 1;
  totalItems: number;
  itemsPerPage = 20;

  constructor(public newsapi: NewsApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllData();   

  }

  getAllData() {
    this.route.params.subscribe(
      (params: Params) => {
        this.query = params['query'];
        this.pageNumber = 1; // reset page
        this.newsapi.searchArticle(this.query, this.pageNumber, this.itemsPerPage)
          .subscribe(
            (data: any) => {
              this.articles = data.articles, 
              this.totalItems = data.totalResults
            }
          );
      }
    );
  }

  getPage(page) {
    this.pageNumber = page;
    this.newsapi.searchArticle(this.query, this.pageNumber, this.itemsPerPage)
    .subscribe(
      (data: any) => {
        this.articles = data.articles, 
        this.totalItems = data.totalResults
      }
    );
  }

}
