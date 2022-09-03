import { Component, OnInit } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user:User=new User();
  isDark:boolean=true;
  constructor(){
    
  }

  ngOnInit(): void { 
    
  }

  getBackroundColor(){
    return !this.isDark?'#212529':'#0d6efd';
  }
  
  onSubmit(){
    console.log(this.user);
  }
  hello(){
     console.log("HELLO WORLD");
  }
}
