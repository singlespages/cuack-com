import { Component } from '@angular/core';
import {ContactComponent} from "../../contact/contact.component";
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'app-sub-page-design-mark',
  standalone: true,
  imports: [
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './sub-page-design-mark.component.html',
  styleUrl: './sub-page-design-mark.component.scss'
})
export class SubPageDesignMarkComponent {

}
