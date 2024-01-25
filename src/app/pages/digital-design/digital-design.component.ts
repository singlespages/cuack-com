import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgIf, NgSwitchCase} from "@angular/common";
import {CustomPageDesignComponent} from "../custom-page-design/custom-page-design.component";

@Component({
  selector: 'app-digital-design',
  standalone: true,
  imports: [
    RouterLink,
    NgSwitchCase,
    CustomPageDesignComponent,
    NgIf
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
