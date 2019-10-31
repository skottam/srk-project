import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentSurveyComponent } from './consent-survey.component';

describe('ConsentSurveyComponent', () => {
  let component: ConsentSurveyComponent;
  let fixture: ComponentFixture<ConsentSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
