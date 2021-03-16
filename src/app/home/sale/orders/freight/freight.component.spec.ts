import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FreightComponent } from './freight.component';

describe('FreightComponent', () => {
  let component: FreightComponent;
  let fixture: ComponentFixture<FreightComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
