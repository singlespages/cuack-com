import {Component, Input} from '@angular/core';
import {ContactComponent} from "../../contact/contact.component";
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'app-custom-page-design',
  standalone: true,
  imports: [
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './custom-page-design.component.html',
  styleUrl: './custom-page-design.component.scss'
})
export class CustomPageDesignComponent {

}
