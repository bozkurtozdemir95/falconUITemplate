import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipseButtonComponent } from './ellipse-button.component';

describe('EllipseButtonComponent', () => {
  let component: EllipseButtonComponent;
  let fixture: ComponentFixture<EllipseButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EllipseButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
