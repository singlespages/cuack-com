import { Component } from '@angular/core';
import {ContactComponent} from "../../contact/contact.component";
import {FooterComponent} from "../../footer/footer.component";
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector: 'app-subpage-design-web',
  standalone: true,
  imports: [
    ContactComponent,
    FooterComponent,
    SlickCarouselModule
  ],
  templateUrl: './subpage-design-web.component.html',
  styleUrl: './subpage-design-web.component.scss'
})
export class SubpageDesignWebComponent {
  slideConfigTwo = {
    infinite: true,
    "slidesToShow": 1,
    dots: true,
    arrows: false
  };

}
