import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {
 books:any=[
  {
    id:1,
    name:'Java',
    price:160,
    description:'Java 8 Edition to Develop  Real Word Apps'
  },
  {
    id:2,
    name:'Angular',
    price:140,
    description:'Angular 8 Edition to Develop  Real Word Apps'
  },
  {
    id:3,
    name:'REACT',
    price:210,
    description:'React Edition to Develop  Real Word Apps'
  },
  {
    id:4,
    name:'DEVOPS',
    price:220,
    description:'Devops Edition to Develop  Real Word Apps'
  },
  {
    id:4,
    name:'TYPESCRIPT',
    price:205,
    description:'Devops Edition to Develop  Real Word Apps'
  }
 ];

 displayColor:string;
  constructor() { }

  ngOnInit(): void {
  }




}
