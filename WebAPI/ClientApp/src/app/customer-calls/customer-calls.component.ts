import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerCallService } from '../services/customer-call.service';
import { CustomerCall } from '../models/customercall';

@Component({
  selector: 'app-customer-calls',
  templateUrl: './customer-calls.component.html',
  styleUrls: ['./customer-calls.component.scss']
})
export class CustomerCallsComponent implements OnInit {

  customerCalls$: Observable<CustomerCall[]>;

  constructor(private customerCallService: CustomerCallService) {
  }

  ngOnInit() {
    this.loadCustomerCalls();
  }

  loadCustomerCalls() {
    this.customerCalls$ = this.customerCallService.getCustomerCalls();
  }

  delete(id) {
    const ans = confirm('Do you want to delete blog post with id: ' + id);
    if (ans) {
      this.customerCallService.deleteCustomerCall(id).subscribe((data) => {
        this.loadCustomerCalls();
      });
    }
  }
}