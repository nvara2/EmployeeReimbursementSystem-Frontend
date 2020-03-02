import { Component, OnInit } from '@angular/core';
import{ExpenseRecord} from '../../Models/ExpenseRecord';
import {HttpClient, HttpResponse} from '@angular/common/http';
//import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import { ErsService } from 'src/app/shared/ers.service';
import { tick } from '@angular/core/testing';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-reimbursement',
  templateUrl: './reimbursement.component.html',
  styleUrls: ['./reimbursement.component.css']
})
export class ReimbursementComponent implements OnInit {

  //url: string = 'http://localhost:8080/getAllExpenseRecords';

  records: any; 
  message = '';
  isManager: boolean = false;
  username: string = "";
 
  constructor(private http: HttpClient, private router: Router, private ersService: ErsService, private userService: UsersService) {
   }

  ngOnInit() {
    if(this.userService.user) {
      this.isManager = this.userService.user.role === 2;
      this.username = this.userService.user.firstname + " " + this.userService.user.lastname;
    }
    console.log('Manager: ' + this.isManager);
    this.getAll();
  }

  //ngDoCheck() {
    //this.getAll();
  //}
  async getAll() {
    var tickets = await this.ersService.getAll();
    var objStr = JSON.stringify(tickets);
    console.log('objstr' + objStr);
    this.records = tickets;
  }

  extractData(res: HttpResponse<Object>) {
    var key, count = 0;
    console.log('Obj: ' + JSON.stringify(res.body));
    for(key in res.body) {
      console.log('Obj: ' + JSON.stringify(res.body[count]));
        this.records.push(res.body[count++]);
    }
  }

  createNewRecord() {
    //this.http.post<ExpenseRecord>(this.url, msg).subscribe(res => {
     // this.records.push(res);
    //}); 
    this.router.navigateByUrl('/create-new-request');
    this.message = 'Creating new expense request';
   }
  viewAllTickets(){
    this.router.navigateByUrl('/view-all-tickets');
    this.message = 'Viewing All Tickets';
  }
  loggingOut(){
    console.log('Logged Out');
    this.router.navigateByUrl('/login');
      this.message = 'Logged Out';
  }

}

