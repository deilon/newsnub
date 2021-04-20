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

  currentDate = new Date();
  greetings: string;

  constructor(
    public dialog: MatDialog, 
    private router: Router,
    private themeService: ThemeService) { }

  ngOnInit() {
    this.setDateAndTime();
    this.greet();
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

  setDateAndTime() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  greet() {
    if(this.currentDate.getHours() < 12) {
      this.greetings = "Good Morning";
    } else if (this.currentDate.getHours() < 17) {
      this.greetings = "Good Afternoon";
    } else {
      this.greetings = "Good Evening";
    }
  }

}
