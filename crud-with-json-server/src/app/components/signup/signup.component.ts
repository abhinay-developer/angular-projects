import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  public signupForm: any;
  public usersList= [];
  selectedId: any;
  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private route: ActivatedRoute
  ) {
    this.selectedId = this.route.snapshot.params.id;
    console.log(this.selectedId);
  }

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
    this.getAllUsers();
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

  public getAllUsers() {
    this.ds.getUserById(this.selectedId).subscribe(
      (res: any) => {
        this.usersList.push(res);
        this.usersList.forEach((data: any) => {
          this.signupForm.get('firstName').patchValue(data.firstName);
          this.signupForm.get('lastName').patchValue(data.lastName);
          this.signupForm.get('email').patchValue(data.email);
          this.signupForm.get('password').patchValue(data.password);
          this.signupForm.get('phone').patchValue(data.phone);
          data.addresses.forEach(element => {
              this.addresses().push(this.fb.group({
                streetName: [element.streetName],
                city: [element.city],
                country: [element.country],
                pincode: [element.pincode],
              }))
          });
         });
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
