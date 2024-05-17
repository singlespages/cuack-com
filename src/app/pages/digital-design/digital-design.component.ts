import {Component, HostListener} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterLinkActive} from "@angular/router";
import {NgIf, NgSwitchCase} from "@angular/common";
import {CustomPageDesignComponent} from "../subpages/custom-page-design/custom-page-design.component";
import {SubpageDesignWebComponent} from "../subpages/subpage-design-web/subpage-design-web.component";
import {SubPageDesignMarkComponent} from "../subpages/sub-page-design-mark/sub-page-design-mark.component";
import {
  SubpageStrategicCommunicationComponent
} from "../subpages/subpage-strategic-communication/subpage-strategic-communication.component";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";
import {WsButtonComponent} from "../../components/ws-button/ws-button.component";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-digital-design',
  standalone: true,
    imports: [
        RouterLink,
        NgSwitchCase,
        CustomPageDesignComponent,
        NgIf,
        SubpageDesignWebComponent,
        SubPageDesignMarkComponent,
        SubpageStrategicCommunicationComponent,
        SlickCarouselModule,
        RouterLinkActive,
        NavMobileComponent,
        WsButtonComponent
    ],
  templateUrl: './digital-design.component.html',
  styleUrl: './digital-design.component.scss'
})
export class DigitalDesignComponent {
  isMenuOpen: boolean = false;
  screenWidth!: number;
  constructor(private route: ActivatedRoute, private meta: Meta) {
    this.screenWidth = window.innerWidth;
    this.route.paramMap.subscribe((params) => {
      this.activeTab = Number(params.get('id'));
      this.isMenuOpen = false;
    })
    this.meta.addTag({title: 'Diseño Digital: Servicios Creativos y Soluciones Innovadoras - Cuackcolombia' ,name: 'description', content: 'Descubre los servicios de diseño digital de Cuackcolombia. Creamos experiencias visuales impactantes y soluciones innovadoras para destacar tu marca en el entorno digital.'})
  }

  toggleMenu(event: Event): void {
    event.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
  }

  activeTab = 1;

  changeTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  slideConfigTwo = {
    infinite: false,
    "slidesToShow": 2,
    dots: false,
    arrows: true
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

}
