import {Component, HostListener} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";
import {NgIf} from "@angular/common";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    RouterLinkActive,
    SlickCarouselModule,
    NavMobileComponent,
    NgIf
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

  screenWidth!: number;

  constructor(private router: Router, private meta: Meta) {
    this.screenWidth = window.innerWidth;
    this.meta.addTag({title: 'Blog de Cuackcolombia: Noticias, Tendencias y Consejos en Publicidad y Diseño' ,name: 'description', content: 'Explora nuestro blog para estar al tanto de las últimas noticias, tendencias y consejos en el mundo de la publicidad y el diseño gráfico. Mantente informado y inspirado con Cuackcolombia.'})
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
