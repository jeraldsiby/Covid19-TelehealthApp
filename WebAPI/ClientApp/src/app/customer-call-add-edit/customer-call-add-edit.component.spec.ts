import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCallAddEditComponent } from './customer-call-add-edit.component';

describe('CustomerCallAddEditComponent', () => {
  let component: CustomerCallAddEditComponent;
  let fixture: ComponentFixture<CustomerCallAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCallAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCallAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
