import {Component, HostListener} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";
import {NgIf} from "@angular/common";
import {WsButtonComponent} from "../../components/ws-button/ws-button.component";
import {Meta} from "@angular/platform-browser";

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

  constructor(private router: Router, private meta: Meta) {
    this.screenWidth = window.innerWidth;
    this.meta.addTag({title: 'Conoce a Cuackcolombia: Nuestra Historia y Valores' ,name: 'description', content: 'En Cuackcolombia, somos más que una agencia de publicidad. Descubre nuestra historia, nuestra pasión inquebrantable por el diseño gráfico y cómo estamos redefiniendo el estándar en la industria publicitaria en Colombia.'})
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
