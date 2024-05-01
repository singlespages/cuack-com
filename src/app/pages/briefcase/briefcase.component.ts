import {Component, HostListener} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {FooterComponent} from "../footer/footer.component";
import {NavMobileComponent} from "../nav-mobile/nav-mobile.component";
import {NgIf} from "@angular/common";
import {ModalService} from "../../services/modal.service";
import {ModalComponent} from "../../components/modal/modal.component";
import {Observable} from "rxjs";
import {WsButtonComponent} from "../../components/ws-button/ws-button.component";

@Component({
  selector: 'app-briefcase',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    RouterLinkActive,
    NavMobileComponent,
    NgIf,
    ModalComponent,
    WsButtonComponent
  ],
  templateUrl: './briefcase.component.html',
  styleUrl: './briefcase.component.scss'
})
export class BriefcaseComponent {
  isMenuOpen: boolean = false;

  screenWidth!: number;
  display$!: Observable<any>;
  modalLeft: number = 0;
  modalTop: number = 0;
  constructor(
    private modalService: ModalService
  ) {
    this.screenWidth = window.innerWidth;
    this.modalService.watchCoordinates().subscribe(coordinates => {
      this.modalLeft = coordinates.x;
      this.modalTop = coordinates.y;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
  }

  toggleMenu(event: Event): void {
    event.preventDefault();
    this.isMenuOpen = !this.isMenuOpen;
  }

  open(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;
    this.modalService.open(x, y);
  }

}
