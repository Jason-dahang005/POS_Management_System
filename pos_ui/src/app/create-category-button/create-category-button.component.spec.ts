import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCategoryButtonComponent } from './create-category-button.component';

describe('CreateCategoryButtonComponent', () => {
  let component: CreateCategoryButtonComponent;
  let fixture: ComponentFixture<CreateCategoryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCategoryButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCategoryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
