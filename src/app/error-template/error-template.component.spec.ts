import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTemplateComponent } from './error-template.component';

describe('ErrorTemplateComponent', () => {
  let component: ErrorTemplateComponent;
  let fixture: ComponentFixture<ErrorTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
