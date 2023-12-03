import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPortadaComponent } from './banner-portada.component';

describe('BannerPortadaComponent', () => {
  let component: BannerPortadaComponent;
  let fixture: ComponentFixture<BannerPortadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerPortadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
