import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogCostsComponent } from './dialog-costs.component';

describe('DialogCostsComponent', () => {
  let component: DialogCostsComponent;
  let fixture: ComponentFixture<DialogCostsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogCostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
