import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm: any;
  constructor(private fb: FormBuilder, private ds: DataService) {}

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

  public save() {
    this.ds.saveUser(this.signupForm.value).subscribe(
      (res: any) => {
        console.log(res);
        this.signupForm.reset();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
