import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private display: BehaviorSubject<'open' | 'close'> = new BehaviorSubject<'open' | 'close'>('close');
  private coordinates: BehaviorSubject<{ x: number, y: number }> = new BehaviorSubject<{ x: number, y: number }>({ x: 0, y: 0 });

  watch(): Observable<'open' | 'close'> {
    return this.display.asObservable();
  }

  watchCoordinates(): Observable<{ x: number, y: number }> {
    return this.coordinates.asObservable();
  }

  open(x: number, y: number) {
    // Pasamos las coordenadas a través del flujo observable
    this.coordinates.next({ x, y });
    this.display.next('open');
  }

  close() {
    this.display.next('close');
  }
}
