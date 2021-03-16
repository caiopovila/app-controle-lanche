import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogSaleComponent } from './dialog-sale.component';

describe('DialogSaleComponent', () => {
  let component: DialogSaleComponent;
  let fixture: ComponentFixture<DialogSaleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
