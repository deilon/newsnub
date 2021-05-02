import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
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
export class AppComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  greetings: string;
  
  constructor(
    public dialog: MatDialog, 
    private router: Router,
    private themeService: ThemeService,
    changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) { 
      this.mobileQuery = media.matchMedia('(max-width: 1199px)'); // Tablet view
      this._mobileQueryListener = () => changeDetectorRef.detectChanges();
      this.mobileQuery.addListener(this._mobileQueryListener);
    }

  ngOnInit() {
    this.greet();
    this.setTheme();
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  openDialog() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '900px',
      panelClass: 'myapp-custom-colors'
    });
  }

  onSubmit(f: NgForm) {
    if (f.value.search !== '') {
      this.router.navigate(['/articles/search/' + f.value.search ]);
    }
  }

  setTheme() {
    // Set Current theme for the app
    if (localStorage.getItem('currentTheme') == 'light') {
      this.themeService.setLightTheme();
    } else if (localStorage.getItem('currentTheme') == 'dark') {
      this.themeService.setDarkTheme();
    }
  }

  // Set up greet hours
  greet() {
    setInterval(() => {
      let currentDate = new Date();
      if(currentDate.getHours() < 12) {
        this.greetings = "Good Morning";
      } else if (currentDate.getHours() < 17) {
        this.greetings = "Good Afternoon";
      } else {
        this.greetings = "Good Evening";
      }
    }, 1000);
  }

}
