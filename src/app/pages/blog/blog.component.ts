import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-blog',
  standalone: true,
    imports: [
        RouterLink,
        FooterComponent,
        RouterLinkActive
    ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
