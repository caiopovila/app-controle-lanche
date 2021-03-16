import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LogoIndexComponent } from './logo-index.component';

describe('LogoIndexComponent', () => {
  let component: LogoIndexComponent;
  let fixture: ComponentFixture<LogoIndexComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
