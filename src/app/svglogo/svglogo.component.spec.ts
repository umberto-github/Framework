import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvglogoComponent } from './svglogo.component';

describe('SvglogoComponent', () => {
  let component: SvglogoComponent;
  let fixture: ComponentFixture<SvglogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SvglogoComponent]
    });
    fixture = TestBed.createComponent(SvglogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
