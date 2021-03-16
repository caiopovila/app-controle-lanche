import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FreightListComponent } from './freight-list.component';

describe('FreightListComponent', () => {
  let component: FreightListComponent;
  let fixture: ComponentFixture<FreightListComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FreightListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
