import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalwrapperComponent } from './modalwrapper.component';

describe('ModalwrapperComponent', () => {
  let component: ModalwrapperComponent;
  let fixture: ComponentFixture<ModalwrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalwrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
