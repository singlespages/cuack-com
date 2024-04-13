import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ContactComponent} from "../contact/contact.component";
import {FooterComponent} from "../footer/footer.component";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    RouterLink,
    ContactComponent,
    FooterComponent,
    RouterLinkActive,
    NavMobileComponent,
    NgIf
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
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
