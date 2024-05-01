import {Component, HostListener} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";
import {NgIf} from "@angular/common";
import {WsButtonComponent} from "../../components/ws-button/ws-button.component";

@Component({
  selector: 'app-about',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive,
        NavMobileComponent,
        NgIf,
        WsButtonComponent
    ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  isMenuOpen: boolean = false;
  screenWidth!: number;

  constructor(private router: Router) {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }


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
