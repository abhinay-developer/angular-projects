import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isPresent: boolean = true;
  student: string = 'PRESENT';
  day: string="TUESDAY";
  colors:string="";
  studentsList = [
    {
      id: 1,
      name: 'raju',
      age: 25,
      schoolName: 'SIDDARTHA',
    },
    {
      id: 2,
      name: 'rajukumar',
      age: 29,
      schoolName: 'SHK',
    },
    {
      id: 3,
      name: 'Kumar',
      age: 12,
      schoolName: 'SSL',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    switch (this.day) {
      case 'MONDAY':
        console.log('Welcome to Moday');
        break;

      case 'TUESDAY':
        console.log('WELCOME TO TUESDAY');
        break;
      default:
        console.log('Invalid Day');
    }
  }


  public get color(){
    return this.colors.toUpperCase();
  }

}
