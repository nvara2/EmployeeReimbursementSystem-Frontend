import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReimbursementComponent } from './components/reimbursement/reimbursement.component';
import { CreateNewRequestComponent } from './components/create-new-request/create-new-request.component';
import {ViewAllTicketsComponent} from './components/view-all-tickets/view-all-tickets.component';




const routes: Routes = [{
  path: 'login',
  component: LoginComponent
}, {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'

}, {
  path: 'reimbursement',
  component: ReimbursementComponent

},
{
  path:'create-new-request',
  component:CreateNewRequestComponent
},

{
  path:'view-all-tickets',
  component:ViewAllTicketsComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
