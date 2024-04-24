import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeDetaliComponent } from './recipe-detali.component';

describe('RecipeDetaliComponent', () => {
  let component: RecipeDetaliComponent;
  let fixture: ComponentFixture<RecipeDetaliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeDetaliComponent]
    });
    fixture = TestBed.createComponent(RecipeDetaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
