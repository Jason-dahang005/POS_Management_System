import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductButtonComponent } from './create-product-button.component';

describe('CreateProductButtonComponent', () => {
  let component: CreateProductButtonComponent;
  let fixture: ComponentFixture<CreateProductButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateProductButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProductButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
