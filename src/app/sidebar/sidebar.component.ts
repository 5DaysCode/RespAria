import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent {
  public isSidebarVisible = false;

  toggleSideBar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
