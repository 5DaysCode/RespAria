import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  showNavbarFooter: boolean = true;

  constructor(private router: Router) {
    //Listening to route chanegs

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavbarFooter = event.url !== '/login'; //dont sow navbar
      }
    });
  }
}
