import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerCallsComponent } from './customer-calls/customer-calls.component';
import { CustomerCallComponent } from './customer-call/customer-call.component';
import { CustomerCallAddEditComponent } from './customer-call-add-edit/customer-call-add-edit.component';
import { CustomerCallService } from './services/customer-call.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCallsComponent,
    CustomerCallComponent,
    CustomerCallAddEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomerCallService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
