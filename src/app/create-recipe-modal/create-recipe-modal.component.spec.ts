import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRecipeModalComponent } from './create-recipe-modal.component';

describe('CreateRecipeModalComponent', () => {
  let component: CreateRecipeModalComponent;
  let fixture: ComponentFixture<CreateRecipeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRecipeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRecipeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
