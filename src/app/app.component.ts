import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewsApiService } from './news-api.service';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  articles: Array<any>;
  sources: Array<any>;

  constructor(private newsapi: NewsApiService, public dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '900px',
    });
  }

  ngOnInit() {

  }

}
