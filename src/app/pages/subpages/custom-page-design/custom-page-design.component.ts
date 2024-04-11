import {Component, Input} from '@angular/core';
import {ContactComponent} from "../../contact/contact.component";
import {FooterComponent} from "../../footer/footer.component";
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector: 'app-custom-page-design',
  standalone: true,
  imports: [
    ContactComponent,
    FooterComponent,
    SlickCarouselModule
  ],
  templateUrl: './custom-page-design.component.html',
  styleUrl: './custom-page-design.component.scss'
})
export class CustomPageDesignComponent {
  slideConfigTwo = {
    infinite: true,
    "slidesToShow": 1,
    dots: true,
    arrows: false
  };

}
