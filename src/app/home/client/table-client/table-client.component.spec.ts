import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableClientComponent } from './table-client.component';

describe('TableClientComponent', () => {
  let component: TableClientComponent;
  let fixture: ComponentFixture<TableClientComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
