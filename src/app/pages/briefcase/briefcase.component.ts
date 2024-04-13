import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-briefcase',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    RouterLinkActive,
    NavMobileComponent,
    NgIf
  ],
  templateUrl: './briefcase.component.html',
  styleUrl: './briefcase.component.scss'
})
export class BriefcaseComponent {
  isMenuOpen: boolean = false;

  screenWidth!: number;
  constructor() {
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


}
