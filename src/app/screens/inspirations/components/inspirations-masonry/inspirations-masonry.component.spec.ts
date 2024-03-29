import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspirationsMasonryComponent } from './inspirations-masonry.component';

describe('InspirationsMasonryComponent', () => {
  let component: InspirationsMasonryComponent;
  let fixture: ComponentFixture<InspirationsMasonryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspirationsMasonryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspirationsMasonryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
