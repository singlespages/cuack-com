import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector: 'app-blog',
  standalone: true,
    imports: [
        RouterLink,
        FooterComponent,
        RouterLinkActive,
        SlickCarouselModule
    ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  slideConfigTwo = {
    infinite: true,
    "slidesToShow": 1,
    dots: true,
    arrows: false
  };
  isMenuOpen: boolean = false;

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
