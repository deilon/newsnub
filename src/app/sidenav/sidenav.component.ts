import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SettingsDialogComponent } from '../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  currentDate = new Date();

  constructor(public dialog: MatDialog) { 
  }

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  openDialog() {
    const dialogRef = this.dialog.open(SettingsDialogComponent, {
      width: '900px',
      panelClass: 'myapp-custom-colors'
    });
  }

}
