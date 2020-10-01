import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CustomerCallService } from '../services/customer-call.service';
import { CustomerCall } from '../models/customercall';

@Component({
  selector: 'app-customer-call',
  templateUrl: './customer-call.component.html',
  styleUrls: ['./customer-call.component.scss']
})
export class CustomerCallComponent implements OnInit {

  customerCall$: Observable<CustomerCall>;
  id: number;

  constructor(private customerCallService: CustomerCallService, private avRoute: ActivatedRoute) {
    const idParam = 'id';
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }
  }

  ngOnInit() {
    this.loadCustomerCall();
  }

  loadCustomerCall() {
    this.customerCall$ = this.customerCallService.getCustomerCall(this.id);
  }
}