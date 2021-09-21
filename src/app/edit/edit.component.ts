import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('f') signupForm: NgForm;
  user: User;

  submitted = false;
  currentValues:any = {}

  constructor(private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService,
  ) { }

  ngOnInit(): void {
    console.log(this.usersService.selectedUser)
    this.editCustomer();
  }
  onCancel(f) {
    this.user = {...this.currentValues}
    this.usersService.selectedUser = {...this.currentValues}
    
    console.log(this.signupForm);
  }

  editCustomer() {
    this.user = this.usersService.selectedUser;
    this.currentValues={...this.user};
  }

  onSubmit(form: NgForm) {
    this.submitted = true;
    console.log(form);
    this.currentValues = {};
    this.router.navigate([''])
  }
}
