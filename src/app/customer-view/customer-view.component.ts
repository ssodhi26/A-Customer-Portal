import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
  user: User;

  constructor(private router:Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
    ) { }

  ngOnInit(): void {
    this.viewCustomer();
  }

  onDashboardClick()
  {
    this.router.navigate([''])
  }

  viewCustomer()
  {
    const name = String(this.route.snapshot.paramMap.get('name'));
    this.usersService.getCust(name).subscribe(MockUsers => (this.user = MockUsers));
  }

}
