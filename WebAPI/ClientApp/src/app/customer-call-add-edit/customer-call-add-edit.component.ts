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
  id: number;
  formName: string;
  formEmail: string;
  formAddress: string;
  formPostalCode: string;
  formDate: Date;
  formResponse: string;
  errorMessage: any;
  existingCustomerCall: CustomerCall;

  constructor(private customerCallService: CustomerCallService, private formBuilder: FormBuilder, private avRoute: ActivatedRoute, private router: Router) {
    const idParam = 'id';
    this.actionType = 'Add';
    this.formName = 'name';
    this.formEmail = 'email';
    this.formAddress = 'address';
    this.formPostalCode = 'postalCode';
    this.formResponse = 'response';
    if (this.avRoute.snapshot.params[idParam]) {
      this.id = this.avRoute.snapshot.params[idParam];
    }

    this.form = this.formBuilder.group(
      {
        id: 0,
        name: ['', [Validators.required]],
        email: ['', [Validators.required]],
        address: [''],
        date: [''],
        postalCode: [''],
        response: [''],
      }
    )
  }

  ngOnInit() {
  }

  save() {
    if (!this.form.valid) {
      return;
    }

    if (this.actionType === 'Add') {
      let customerCall: CustomerCall = {
        date: new Date(),
        name: this.form.get(this.formName).value,
        email: this.form.get(this.formEmail).value,
        address: this.form.get(this.formAddress).value,
        postalCode: this.form.get(this.formPostalCode).value,
        response: this.form.get(this.formResponse).value
      };

      this.customerCallService.saveCustomerCall(customerCall)
        .subscribe((data) => {
          this.router.navigate(['/customercall', data.id]);
        });
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }

  get name() { return this.form.get(this.formName); }
  get email() { return this.form.get(this.formEmail); }
}