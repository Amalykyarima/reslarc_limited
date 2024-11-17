import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReslarcNewsComponent } from './reslarc-news.component';

describe('ReslarcNewsComponent', () => {
  let component: ReslarcNewsComponent;
  let fixture: ComponentFixture<ReslarcNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReslarcNewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReslarcNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
