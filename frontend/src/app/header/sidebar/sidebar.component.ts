import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}
  sidebarOpen = false;
  ngOnInit(): void {}
  opensidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    console.log('open');
  }
}
