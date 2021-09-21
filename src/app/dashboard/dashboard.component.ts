import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cust: User[] = [];

  constructor(private userService: UsersService,
    private router: Router) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.cust = this.userService.getCustomer();

    console.log(this.cust)
  }

  onAddCustomer() {
    this.router.navigate(['/add'])
  }

  edit(name: string) {
  let value = this.cust.find(cust => cust.name = name);
  this.userService.selectedUser = value;
  this.router.navigate(['/edit'], { queryParams: { name: name } })
   }
}
