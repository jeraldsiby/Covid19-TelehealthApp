import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerCallService } from '../services/customer-call.service';
import { CustomerCall } from '../models/customercall';

@Component({
  selector: 'app-customer-call-add-edit',
  templateUrl: './customer-call-add-edit.component.html',
  styleUrls: ['./customer-call-add-edit.component.scss']
})
export class CustomerCallAddEditComponent implements OnInit {

  form: FormGroup;
  actionType: string;
  formName: string;
  formEmail: string;
  id: number;
  errorMessage: any;
  existingCustomerCall: CustomerCall;

  constructor(private customerCallService: CustomerCallService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formName = 'name';
    this.formEmail = 'email';
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        id: 0,
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
      }
    )
  }

  ngOnInit() {

    if (this.id > 0) {
      this.actionType = 'Edit';
      this.customerCallService.getCustomerCall(this.id)
        .subscribe(data => (
          this.existingCustomerCall = data,
          this.form.controls[this.formName].setValue(data.name),
          this.form.controls[this.formEmail].setValue(data.email)
        ));
    }
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let customerCall: CustomerCall = {
        date: new Date(),
        //name: 'Martin',
        name: this.form.get(this.formName).value,
        email: this.form.get(this.formEmail).value,
        address: '',
        postalCode: '',
        response: ''
      };

      this.customerCallService.saveCustomerCall(customerCall)
        .subscribe((data) => {
          this.router.navigate(['/customercall', data.id]);
        });
    }

    // if (this.actionType === 'Edit') {
    //   let customerCall: CustomerCall = {
    //     id: this.existingCustomerCall.id,
    //     name: this.existingCustomerCall.name,
    //     email: this.existingCustomerCall.email

    //   };
    //   this.customerCallService.updateCustomerCall(customerCall.id, customerCall)
    //     .subscribe((data) => {
    //       this.router.navigate([this.router.url]);
    //     });
    // }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get name() { return this.form.get(this.formName); }
  get email() { return this.form.get(this.formEmail); }
}