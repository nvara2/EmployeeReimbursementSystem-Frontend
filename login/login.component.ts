import { Component, OnInit } from '@angular/core';
import { ErsService } from 'src/app/shared/ers.service';
import { Users } from 'src/app/Models/Users';
import { UsersService } from 'src/app/shared/users.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputUsername = '';
  inputPassword = '';

  invalidInput = false;
  constructor(private ersService: ErsService, private userService: UsersService, private router: Router) { }

  ngOnInit() {
  }
  async submit() {
    await this.ersService.login(this.inputUsername, this.inputPassword);
    if (this.userService.user.userid != -1) {
      this.invalidInput = false;
      this.router.navigateByUrl('/reimbursement');
    } else {
      this.invalidInput = true;
    }
  }
}


