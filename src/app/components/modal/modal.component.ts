import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ModalService} from "../../services/modal.service";
import {AsyncPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  display$!: Observable<'open' | 'close'>;
  constructor(
    private modalService: ModalService
  ) {}
  ngOnInit() {
    this.display$ = this.modalService.watch();
  }
  close() {
    this.modalService.close();
  }

}
