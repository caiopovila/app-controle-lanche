import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemDetComponent } from './item-det.component';

describe('ItemDetComponent', () => {
  let component: ItemDetComponent;
  let fixture: ComponentFixture<ItemDetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
