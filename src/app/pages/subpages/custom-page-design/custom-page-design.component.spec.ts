import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPageDesignComponent } from './custom-page-design.component';

describe('CustomPageDesignComponent', () => {
  let component: CustomPageDesignComponent;
  let fixture: ComponentFixture<CustomPageDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPageDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomPageDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
