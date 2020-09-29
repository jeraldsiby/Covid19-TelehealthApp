import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerCallsComponent } from './customer-calls/customer-calls.component';
import { CustomerCallComponent } from './customer-call/customer-call.component';
import { CustomerCallAddEditComponent } from './customer-call-add-edit/customer-call-add-edit.component';

const routes: Routes = [
  { path: '', component: CustomerCallsComponent, pathMatch: 'full' },
  { path: 'customercall/:id', component: CustomerCallComponent },
  { path: 'add', component: CustomerCallAddEditComponent },
  { path: 'customercall/edit/:id', component: CustomerCallAddEditComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
