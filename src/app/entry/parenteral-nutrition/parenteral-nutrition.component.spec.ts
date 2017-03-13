import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenteralNutritionComponent } from './parenteral-nutrition.component';

describe('ParenteralNutritionComponent', () => {
  let component: ParenteralNutritionComponent;
  let fixture: ComponentFixture<ParenteralNutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenteralNutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenteralNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
