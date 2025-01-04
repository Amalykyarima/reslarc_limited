import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtReslarcComponent } from './life-at-reslarc.component';

describe('LifeAtReslarcComponent', () => {
  let component: LifeAtReslarcComponent;
  let fixture: ComponentFixture<LifeAtReslarcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeAtReslarcComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifeAtReslarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
