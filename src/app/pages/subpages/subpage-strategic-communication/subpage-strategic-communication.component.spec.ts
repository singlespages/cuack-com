import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageStrategicCommunicationComponent } from './subpage-strategic-communication.component';

describe('SubpageStrategicCommunicationComponent', () => {
  let component: SubpageStrategicCommunicationComponent;
  let fixture: ComponentFixture<SubpageStrategicCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubpageStrategicCommunicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubpageStrategicCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
