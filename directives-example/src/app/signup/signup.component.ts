import { Component, OnInit } from '@angular/core';
export class User{
  name:string;
  email:string;
  password:string;
  mobileNumber:number;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
   user:User=new User();
  constructor() { }

  ngOnInit(): void {
  }

}
