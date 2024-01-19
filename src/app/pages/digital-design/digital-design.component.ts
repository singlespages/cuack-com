import { Component } from '@angular/core';

@Component({
  selector: 'app-digital-design',
  standalone: true,
  imports: [],
  templateUrl: './digital-design.component.html',
  styleUrl: './digital-design.component.scss'
})
export class DigitalDesignComponent {
  activeTab = 1;

  changeTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

}
