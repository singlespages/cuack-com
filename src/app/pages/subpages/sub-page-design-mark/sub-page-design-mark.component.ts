import { Component } from '@angular/core';
import {ContactComponent} from "../../contact/contact.component";
import {FooterComponent} from "../../footer/footer.component";
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector: 'app-sub-page-design-mark',
  standalone: true,
  imports: [
    ContactComponent,
    FooterComponent,
    SlickCarouselModule
  ],
  templateUrl: './sub-page-design-mark.component.html',
  styleUrl: './sub-page-design-mark.component.scss'
})
export class SubPageDesignMarkComponent {
  slideConfigTwo = {
    infinite: true,
    "slidesToShow": 1,
    dots: true,
    arrows: false
  };

}
