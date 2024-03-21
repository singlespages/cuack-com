import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-briefcase',
  standalone: true,
    imports: [
        RouterLink,
        FooterComponent,
        RouterLinkActive
    ],
  templateUrl: './briefcase.component.html',
  styleUrl: './briefcase.component.scss'
})
export class BriefcaseComponent {

}
