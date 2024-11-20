import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentActionsComponent } from './content-actions.component';

describe('ContentActionsComponent', () => {
  let component: ContentActionsComponent;
  let fixture: ComponentFixture<ContentActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentActionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
