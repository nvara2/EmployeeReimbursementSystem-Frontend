import { Component } from '@angular/core';
import { Users } from './Models/Users';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  
  title = 'ERS-Angular';
  constructor(private userService: UsersService) {}

}
