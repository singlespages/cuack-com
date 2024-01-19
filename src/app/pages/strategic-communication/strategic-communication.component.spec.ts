import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicCommunicationComponent } from './strategic-communication.component';

describe('StrategicCommunicationComponent', () => {
  let component: StrategicCommunicationComponent;
  let fixture: ComponentFixture<StrategicCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategicCommunicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StrategicCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
