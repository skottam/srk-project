import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentReviewComponent } from './consent-review.component';

describe('ConsentReviewComponent', () => {
  let component: ConsentReviewComponent;
  let fixture: ComponentFixture<ConsentReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
