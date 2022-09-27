import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
 public  signupForm: any;
  constructor(private fb: FormBuilder) {}

  public onInitForm() {
    this.signupForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      phone: [''],
      addresses: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.onInitForm();
  }

  public addresses(): FormArray {
    return this.signupForm.get('addresses') as FormArray;
  }

  public get address() {
    return this.signupForm.get('addresses');
  }

  public newAddress(): FormGroup {
    return this.fb.group({
      streetName: [''],
      city: [''],
      country: [''],
      pincode: [''],
    });
  }

  public addAddress() {
    this.addresses().push(this.newAddress());
  }

  public removeAddress(index: any) {
    this.addresses().removeAt(index);
  }

  save(){
    console.log(this.signupForm.value);
  }
}
