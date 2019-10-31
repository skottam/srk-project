import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentRisksComponent } from './consent-risks.component';

describe('ConsentRisksComponent', () => {
  let component: ConsentRisksComponent;
  let fixture: ComponentFixture<ConsentRisksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentRisksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentRisksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
