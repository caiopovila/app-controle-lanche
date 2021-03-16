import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusiInfoComponent } from './busi-info.component';

describe('BusiInfoComponent', () => {
  let component: BusiInfoComponent;
  let fixture: ComponentFixture<BusiInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BusiInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusiInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
