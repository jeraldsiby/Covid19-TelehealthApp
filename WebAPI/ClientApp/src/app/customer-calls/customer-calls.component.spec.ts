import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCallsComponent } from './customer-calls.component';

describe('CustomerCallsComponent', () => {
  let component: CustomerCallsComponent;
  let fixture: ComponentFixture<CustomerCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
