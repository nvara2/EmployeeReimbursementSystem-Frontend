import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { ExpenseRecord } from '../Models/ExpenseRecord';
import { Observable, Subject } from 'rxjs';
import { Users } from '../Models/Users';
import { Router } from '@angular/router';
import { UsersService } from './users.service';
import { CreatorRecord } from '../Models/CreatorRecord';

@Injectable({
  providedIn: 'root'
})
export class ErsService {

  private baseUrl = "http://localhost:8080/ers/";
  constructor(private http: HttpClient, private router: Router, private userService: UsersService) { }

  async login(username: string, password: string) {
    const credentials = {
      username: username,
      password: password
    }
    console.log('ersService->login');
    const url = this.baseUrl + 'login';
    console.log('url: ' + url);
    console.log('username: ' + username + ', password: ' + password);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),

      withCredentials: true,
      observe: 'response' as 'response'
    };

    try {
      this.userService.user = await this.http.post<Users>(url, credentials).toPromise();
      console.log('UserFetched: ' + JSON.stringify(this.userService.user));
    } catch {
      console.log('Failed to login');
      // set the user to invalid user
      this.userService.user = new Users();
      this.userService.user.userid = -1;
    }
  }


  async getAll() {
    const url = this.baseUrl + 'ticket/EmpActions';
    let userId = -1;
    if (this.userService.user) {
      userId = this.userService.user.userid;
    }
    console.log('UserId: ' + userId);

    return await this.http.get(url, {
      params: {
        userid: this.userService.user.userid.toString()
      }
    }).toPromise();
  }
  async getAllUserTickets() {
    const url = this.baseUrl + 'ticket/FinManActions';
    const userId = this.userService.user.userid;
    console.log('UserId: ' + userId);

    return await this.http.get(url, {
      params: {
        userid: this.userService.user.userid.toString(),
        role: this.userService.user.role.toString()
      }
    }).toPromise();
  }





  extractData(res: HttpResponse<ExpenseRecord>) {
    var array = new Array();
    var key, count = 0;
    console.log('Obj: ' + JSON.stringify(res.body));
    for (key in res.body) {
      array.push(res.body[count++]);
    }
    return array;
  }

  async create(newRequest: ExpenseRecord) {
    const url = this.baseUrl + 'ticket/EmpActions';
    console.log('ExpenseRecord: ' + JSON.stringify(newRequest));
    const record = await this.http.post<ExpenseRecord>(url, newRequest).toPromise();
    console.log('Return Record: ' + JSON.stringify(record));
  }

  async update(updateRequest: CreatorRecord) {
    const url = this.baseUrl + 'ticket/FinManActions';
    console.log('ExpenseRecord: ' + JSON.stringify(updateRequest));
    const record = await this.http.put<ExpenseRecord>(url, updateRequest, {
      params: {
        userid: this.userService.user.userid.toString(),
        role: this.userService.user.role.toString()
      }
    }).toPromise();
    console.log('Return Record: ' + JSON.stringify(record));
  }
}