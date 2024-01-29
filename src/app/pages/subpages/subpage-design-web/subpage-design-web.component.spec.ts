import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubpageDesignWebComponent } from './subpage-design-web.component';

describe('SubpageDesignWebComponent', () => {
  let component: SubpageDesignWebComponent;
  let fixture: ComponentFixture<SubpageDesignWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubpageDesignWebComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubpageDesignWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
