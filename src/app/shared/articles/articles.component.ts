import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  @Input() articles: Array<any>;
  @Input() category: String;
  @Input() totalItems: number;
  @Input() itemsPerPage: number;
  @Input() pageNumber: number;

  constructor() { }

  ngOnInit() {
  }

}
