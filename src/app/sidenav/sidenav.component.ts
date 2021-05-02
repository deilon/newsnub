import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  currentDate = new Date();

  constructor() { 
  }

  ngOnInit() {
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

}
