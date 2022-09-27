import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  public jobsForm: FormGroup;
  public laksList:any=[
    {
      key: 1,
      value: '1 Lac'
    },
    {
      key: 2,
      value: '2 Lac'
    },
    {
      key: 3,
      value: '3 Lac'
    },
    {
      key: 4,
      value: '5 Lac'
    },
    {
      key: 5,
      value: '5 Lac'
    }
  ];
  public thosandList: [
    {
      key: 1,
      value: '1 thousand'
    },
    {
      key: 2,
      value: '2 thousand'
    },
    {
      key: 3,
      value: '3 thousand'
    },
    {
      key: 4,
      value: '5 thousand'
    },
    {
      key: 5
      value: '5 thousand'
    }
  ]
  public monthList: [
    {
      key: 1,
      value: '1 Month'
    },
    {
      key: 2,
      value: '2 Month'
    },
    {
      key: 3,
      value: '3 Month'
    },
    {
      key: 4,
      value: '5 Month'
    },
    {
      key: 5,
      value: '5 Month'
    }
  ]
  public yearList: [
    {
      key: 1,
      value: '1 Year'
    },
    {
      key: 2,
      value: '2 Year'
    },
    {
      key: 3,
      value: '3 Year'
    },
    {
      key: 4,
      value: '5 Year';
    },
    {
      key: 5,
      value: '5 Year';
    }
  ];
  constructor() {
  }

  ngOnInit(): void {
    this.onInitForm();
  }

  public onInitForm() {
    this.jobsForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      phoneNo: new FormControl(''),
    
    });
  }
}
