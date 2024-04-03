import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
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
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
    this.scrollToTop();
  }

  toggleMenu(event: Event): void {
    event.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
  }


}
