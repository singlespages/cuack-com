import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector: 'app-me-services',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        SlickCarouselModule
    ],
  templateUrl: './me-services.component.html',
  styleUrl: './me-services.component.scss'
})
export class MeServicesComponent {
  isMenuOpen: boolean = false;
  slideConfigTwo = {
    infinite: true,
    "slidesToShow": 1,
    dots: true,
    arrows: false
  };

  constructor(private router: Router) {}
  scrollToTop() {
    window.scrollTo(0, 0);
  }
  navigateTo(route: string) {
    this.router.navigateByUrl(route);
    this.scrollToTop();
  }

  toggleMenu(event: Event): void {
    event.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
  }

}
