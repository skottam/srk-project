import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentPurposeComponent } from './consent-purpose.component';

describe('ConsentPurposeComponent', () => {
  let component: ConsentPurposeComponent;
  let fixture: ComponentFixture<ConsentPurposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentPurposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
