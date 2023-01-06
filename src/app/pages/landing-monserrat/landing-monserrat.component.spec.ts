import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingMonserratComponent } from './landing-monserrat.component';

describe('LandingMonserratComponent', () => {
  let component: LandingMonserratComponent;
  let fixture: ComponentFixture<LandingMonserratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingMonserratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingMonserratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
