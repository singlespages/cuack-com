import { Component } from '@angular/core';
import {ContactComponent} from "../../contact/contact.component";
import {FooterComponent} from "../../footer/footer.component";

@Component({
  selector: 'app-subpage-strategic-communication',
  standalone: true,
  imports: [
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './subpage-strategic-communication.component.html',
  styleUrl: './subpage-strategic-communication.component.scss'
})
export class SubpageStrategicCommunicationComponent {

}
