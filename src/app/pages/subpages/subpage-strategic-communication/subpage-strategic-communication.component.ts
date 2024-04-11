import { Component } from '@angular/core';
import {ContactComponent} from "../../contact/contact.component";
import {FooterComponent} from "../../footer/footer.component";
import {SlickCarouselModule} from "ngx-slick-carousel";

@Component({
  selector: 'app-subpage-strategic-communication',
  standalone: true,
    imports: [
        ContactComponent,
        FooterComponent,
        SlickCarouselModule
    ],
  templateUrl: './subpage-strategic-communication.component.html',
  styleUrl: './subpage-strategic-communication.component.scss'
})
export class SubpageStrategicCommunicationComponent {
  slideConfigTwo = {
    infinite: true,
    "slidesToShow": 1,
    dots: true,
    arrows: false
  };

}
