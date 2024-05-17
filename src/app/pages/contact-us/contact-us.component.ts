import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ContactComponent} from "../contact/contact.component";
import {FooterComponent} from "../footer/footer.component";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";
import {NgIf} from "@angular/common";
import {RecaptchaModule} from "ng-recaptcha";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-contact-us',
  standalone: true,
    imports: [
        RouterLink,
        ContactComponent,
        FooterComponent,
        RouterLinkActive,
        NavMobileComponent,
        NgIf,
        RecaptchaModule
    ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  isMenuOpen: boolean = false;
  screenWidth!: number;

  constructor(private meta: Meta) {
    this.screenWidth = window.innerWidth;
    this.meta.addTag({title: 'Contacto: ¿Listo para llevar tu marca al siguiente nivel?' ,name: 'description', content: 'Ponte en contacto con Cuackcolombia y descubre cómo podemos ayudarte a llevar tu marca al siguiente nivel. Estamos aquí para escucharte y trabajar juntos en tu próxima gran idea.'})
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }


  toggleMenu(event: Event): void {
    event.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
  }

  resolved(captchaResponse: any) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }


}
