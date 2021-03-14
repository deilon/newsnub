import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
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
  initialPage = 1;
  initialPageSize = 20;

  constructor(private newsapi: NewsApiService, public dialog: MatDialog, private router: Router) { }

  openDialog() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '900px',
    });
  }

  ngOnInit() {

  }

  onSubmit(f: NgForm) {
    this.router.navigate(['/articles/search/' + f.value.search ]);
  }

}
