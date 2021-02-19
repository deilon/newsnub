import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {

  sources: Array<any>;

  constructor(private newsapi: NewsApiService) { }

  ngOnInit() {
		//load news sources
		this.newsapi.initSources().subscribe(data=> this.sources = data['sources']);	
  }

}
