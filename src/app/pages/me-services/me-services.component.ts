import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-me-services',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './me-services.component.html',
  styleUrl: './me-services.component.scss'
})
export class MeServicesComponent {

}
