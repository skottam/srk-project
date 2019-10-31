import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentQuestionsComponent } from './consent-questions.component';

describe('ConsentQuestionsComponent', () => {
  let component: ConsentQuestionsComponent;
  let fixture: ComponentFixture<ConsentQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
