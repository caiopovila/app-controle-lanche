import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogInfoBusinessComponent } from './dialog-info-business.component';

describe('DialogInfoBusinessComponent', () => {
  let component: DialogInfoBusinessComponent;
  let fixture: ComponentFixture<DialogInfoBusinessComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogInfoBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInfoBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
