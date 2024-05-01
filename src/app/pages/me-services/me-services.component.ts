import {Component, HostListener} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";
import {NgIf} from "@angular/common";
import {WsButtonComponent} from "../../components/ws-button/ws-button.component";

@Component({
  selector: 'app-me-services',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        SlickCarouselModule,
        NavMobileComponent,
        NgIf,
        WsButtonComponent
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

}
