import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputFieldComponent } from './search-input-field.component';

describe('SearchInputFieldComponent', () => {
  let component: SearchInputFieldComponent;
  let fixture: ComponentFixture<SearchInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInputFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
