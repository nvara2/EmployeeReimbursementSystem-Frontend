import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReimbursementComponent } from './components/reimbursement/reimbursement.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateNewRequestComponent } from './components/create-new-request/create-new-request.component';
import { UsersService } from './shared/users.service';
import { ViewAllTicketsComponent } from './components/view-all-tickets/view-all-tickets.component';
import {MatButtonModule} from '@angular/material/button';
import { StatusName } from './pipes/statuspipe';
import { ActionTypePipe } from './pipes/action-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReimbursementComponent,
    CreateNewRequestComponent,
    ViewAllTicketsComponent,
    StatusName,
    ActionTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
