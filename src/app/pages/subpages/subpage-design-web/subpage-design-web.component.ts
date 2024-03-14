import { Component } from '@angular/core';
import {ContactComponent} from "../../contact/contact.component";
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'app-subpage-design-web',
  standalone: true,
  imports: [
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './subpage-design-web.component.html',
  styleUrl: './subpage-design-web.component.scss'
})
export class SubpageDesignWebComponent {

}
