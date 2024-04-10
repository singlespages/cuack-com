import {AfterViewInit, Component} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    SlickCarouselModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit{
  isMenuOpen: boolean = false;
  slideConfig = {
    infinite: true,
    "slidesToShow": 1,
    dots: true,
    arrows: false
  };
  slideConfigTwo = {
    infinite: true,
    "slidesToShow": 2,
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

  ngAfterViewInit(): void {

  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

  afterChange(e: any) {
    console.log('afterChange');
  }

  beforeChange(e: any) {
    console.log('beforeChange');
  }

}
