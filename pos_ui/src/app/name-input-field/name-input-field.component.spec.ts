import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameInputFieldComponent } from './name-input-field.component';

describe('NameInputFieldComponent', () => {
  let component: NameInputFieldComponent;
  let fixture: ComponentFixture<NameInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameInputFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
