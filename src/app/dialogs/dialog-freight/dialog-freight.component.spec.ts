import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogFreightComponent } from './dialog-freight.component';

describe('DialogFreightComponent', () => {
  let component: DialogFreightComponent;
  let fixture: ComponentFixture<DialogFreightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogFreightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
