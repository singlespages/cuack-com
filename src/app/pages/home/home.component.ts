import {AfterViewInit, Component, HostListener} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NgIf} from "@angular/common";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    SlickCarouselModule,
    NgIf,
    NavMobileComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit{
  isMenuOpen: boolean = false;
  menuOpen: boolean = false;

  isSubmenuOpen: boolean = false;

  toggleSubmenu() {
    this.isSubmenuOpen = !this.isSubmenuOpen;
  }
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

  screenWidth!: number;

  constructor(private router: Router) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

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

  toggleMenuMobile() {
    this.menuOpen = !this.menuOpen;
  }


}
