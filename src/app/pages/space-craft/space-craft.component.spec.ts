import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCraftComponent } from './space-craft.component';

describe('SpaceCraftComponent', () => {
  let component: SpaceCraftComponent;
  let fixture: ComponentFixture<SpaceCraftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpaceCraftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceCraftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
