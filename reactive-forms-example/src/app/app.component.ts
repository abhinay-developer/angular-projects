import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public signupForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.onInitForm();
  }


  public onInitForm() {
    this.signupForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      mobileNumber: new FormControl(''),
    });
  }
  onSubmit(){
     console.log(this.signupForm.value)
  }
}
