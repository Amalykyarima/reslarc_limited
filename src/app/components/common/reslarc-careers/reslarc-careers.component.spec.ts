import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReslarcCareersComponent } from './reslarc-careers.component';

describe('ReslarcCareersComponent', () => {
  let component: ReslarcCareersComponent;
  let fixture: ComponentFixture<ReslarcCareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReslarcCareersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReslarcCareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
