import { Injectable } from '@angular/core';
import {User} from './user'
import {MockUsers} from './mock-users'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

   private selectedUserVal: User;

   get selectedUser(): User {
     return this.selectedUserVal;
   }

   set selectedUser(selectedUserVal: User) {
     this.selectedUserVal = selectedUserVal;
   }

  getCustomer(): User[] {
    return MockUsers;
  }
  getCust(name: string): Observable<User> {
    const user =MockUsers.find(u => u.name === name)!;
    return of(user);
  }
  constructor() { }
}
