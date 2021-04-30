import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() pageChangeEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  changePage(page) {
    this.pageChangeEvent.emit(page);
  }

}
