import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf, NgSwitchCase} from "@angular/common";
import {CustomPageDesignComponent} from "../subpages/custom-page-design/custom-page-design.component";
import {SubpageDesignWebComponent} from "../subpages/subpage-design-web/subpage-design-web.component";

@Component({
  selector: 'app-digital-design',
  standalone: true,
  imports: [
    RouterLink,
    NgSwitchCase,
    CustomPageDesignComponent,
    NgIf,
    SubpageDesignWebComponent
  ],
  templateUrl: './digital-design.component.html',
  styleUrl: './digital-design.component.scss'
})
export class DigitalDesignComponent {
  activeTab = 1;

  changeTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

}
