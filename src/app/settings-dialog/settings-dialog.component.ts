import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { NewsApiService } from '../news-api.service';

@Component({
  selector: 'app-settings-dialog',
  templateUrl: './settings-dialog.component.html',
  styleUrls: ['./settings-dialog.component.scss']
})
export class SettingsDialogComponent implements OnInit {

  sources: Array<any>;

  constructor(private newsapi: NewsApiService, public dialogRef: MatDialogRef<SettingsDialogComponent>) { }

  ngOnInit() {
		//load news sources
		this.newsapi.initSources().subscribe(data=> this.sources = data['sources']);	
  }

  closeOnSourceClick() {
    this.dialogRef.close();
  }

}
