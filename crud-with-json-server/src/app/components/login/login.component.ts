import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public usersList: any[];
  public errorMessage: any = '';
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private ds: DataService
  ) {}

  ngOnInit(): void {
    this.onInitForm();
  }

  public onInitForm() {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  public login() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.ds.getAllUsers().subscribe(
      (res: any) => {
        console.log(res);
        this.usersList = [...res];
        this.usersList.filter((data: any) => {
          if (data.email == email && data.password == password) {
            this.router.navigate(['home']);
          } else {
            this.errorMessage = 'Invalid ,Username or password';
          }
        });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
