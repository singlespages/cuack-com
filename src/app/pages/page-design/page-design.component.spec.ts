import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDesignComponent } from './page-design.component';

describe('PageDesignComponent', () => {
  let component: PageDesignComponent;
  let fixture: ComponentFixture<PageDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
