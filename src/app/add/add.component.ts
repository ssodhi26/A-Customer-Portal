import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from '../user';
import { MockUsers } from '../mock-users';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild('fm') signupFm: NgForm;
  cust:User={
    name:'',
    email:'',
    phone:'',
    address:'',
    description:'',
};

user:User;

  submitted=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onCancel()
  {
    this.router.navigate([''])
  }
  onSubmit(form: NgForm)
{
  this.submitted= true;
  console.log(form);
  this.cust.name=form.value.userData.custname;
  this.cust.email=form.value.userData.email;
  this.cust.phone=form.value.userData.phone;
  this.cust.address=form.value.userData.address;
  this.cust.description=form.value.userData.desc;

  MockUsers.push(this.cust)
  this.router.navigate([''])
}
}
