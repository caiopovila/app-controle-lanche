import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FreightSelectComponent } from './freight-select.component';

describe('FreightSelectComponent', () => {
  let component: FreightSelectComponent;
  let fixture: ComponentFixture<FreightSelectComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
