import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CostsComponent } from './costs.component';

describe('CostsComponent', () => {
  let component: CostsComponent;
  let fixture: ComponentFixture<CostsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
