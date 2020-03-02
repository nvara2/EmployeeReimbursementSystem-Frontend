import { Injectable } from '@angular/core';
import { Users } from '../Models/Users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: Users = null;
  constructor() { }
}
