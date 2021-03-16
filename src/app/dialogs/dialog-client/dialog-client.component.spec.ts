import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogClientComponent } from './dialog-client.component';

describe('DialogClientComponent', () => {
  let component: DialogClientComponent;
  let fixture: ComponentFixture<DialogClientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
