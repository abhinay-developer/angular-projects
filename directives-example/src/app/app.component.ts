import { Component, OnInit } from '@angular/core';
export class Task {
  taskName: string;
  startDate: Date;
  endDate: Date;
  assignTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  task: Task = new Task();
  isdisable: boolean = true;

  constructor() {
  
  }

  ngOnInit(): void {
    
  }
  onSubmit() {
    console.log(this.task);
  }


}
