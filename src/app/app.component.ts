import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { SettingsDialogComponent } from './settings-dialog/settings-dialog.component';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public dialog: MatDialog, 
    private router: Router,
    private themeService: ThemeService) { }

  ngOnInit() {
    this.setTheme();
  }

  openDialog() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '900px',
    });
  }

  onSubmit(f: NgForm) {
    this.router.navigate(['/articles/search/' + f.value.search ]);
  }

  setTheme() {
    // Set Current theme for the app
    if (localStorage.getItem('currentTheme') == 'light') {
      this.themeService.setLightTheme();
    } else if (localStorage.getItem('currentTheme') == 'dark') {
      this.themeService.setDarkTheme();
    }
  }

}
