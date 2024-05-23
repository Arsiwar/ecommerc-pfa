import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pfaBinome';
  showCarousel = false;

  constructor(private router: Router) { }
  ngOnInit(): void {
    this.showCarousel = this.router.url === '/';
  }

  ngAfterViewInit() {
    // Subscribe to NavigationEnd event for future route changes
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showCarousel = event.url === '/home';
      }
    });
  }
}
