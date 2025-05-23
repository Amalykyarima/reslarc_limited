import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatelliteImagingComponent } from './satellite-imaging.component';

describe('SatelliteImagingComponent', () => {
  let component: SatelliteImagingComponent;
  let fixture: ComponentFixture<SatelliteImagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SatelliteImagingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SatelliteImagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
