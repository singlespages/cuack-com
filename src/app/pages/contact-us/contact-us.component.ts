import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ContactComponent} from "../contact/contact.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [
    RouterLink,
    ContactComponent,
    FooterComponent,
    RouterLinkActive
  ],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

}
