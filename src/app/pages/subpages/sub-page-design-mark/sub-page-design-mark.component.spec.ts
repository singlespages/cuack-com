import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPageDesignMarkComponent } from './sub-page-design-mark.component';

describe('SubPageDesignMarkComponent', () => {
  let component: SubPageDesignMarkComponent;
  let fixture: ComponentFixture<SubPageDesignMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubPageDesignMarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubPageDesignMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
