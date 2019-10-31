import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroQuestionnaireComponent } from './intro-questionnaire.component';

describe('IntroQuestionnaireComponent', () => {
  let component: IntroQuestionnaireComponent;
  let fixture: ComponentFixture<IntroQuestionnaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroQuestionnaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
