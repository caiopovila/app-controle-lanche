import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogAdressComponent } from './dialog-adress.component';

describe('DialogAdressComponent', () => {
  let component: DialogAdressComponent;
  let fixture: ComponentFixture<DialogAdressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAdressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
