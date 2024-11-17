import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReslarcIntelligenceComponent } from './reslarc-intelligence.component';

describe('ReslarcIntelligenceComponent', () => {
  let component: ReslarcIntelligenceComponent;
  let fixture: ComponentFixture<ReslarcIntelligenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReslarcIntelligenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReslarcIntelligenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
