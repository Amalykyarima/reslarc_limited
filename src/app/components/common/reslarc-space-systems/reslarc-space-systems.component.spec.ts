import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReslarcSpaceSystemsComponent } from './reslarc-space-systems.component';

describe('ReslarcSpaceSystemsComponent', () => {
  let component: ReslarcSpaceSystemsComponent;
  let fixture: ComponentFixture<ReslarcSpaceSystemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReslarcSpaceSystemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReslarcSpaceSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
