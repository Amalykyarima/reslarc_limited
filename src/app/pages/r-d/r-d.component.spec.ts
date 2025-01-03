import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDComponent } from './r-d.component';

describe('RDComponent', () => {
  let component: RDComponent;
  let fixture: ComponentFixture<RDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RDComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
