import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.scss']
})
export class FormArrayComponent implements OnInit {
  skillsForm: FormGroup;
 
  constructor(private fb:FormBuilder) {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([]) ,
    });
  
  }
  ngOnInit(): void {
  }


  get skills() : FormArray {
    return this.skillsForm.get("skills") as FormArray
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    })
 }

addSkills() {
   this.skills.push(this.newSkill());
} 
}
