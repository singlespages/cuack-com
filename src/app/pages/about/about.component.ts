import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  toggleMenu(event: Event): void {
    event.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
    this.scrollToTop();
  }

}
