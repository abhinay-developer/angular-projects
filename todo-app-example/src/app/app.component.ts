import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public todos: any[] = [
    'ATTEND ANGULAR CLASS',
    'COMPLETE CLASS REGULARLY',
    'DRINK COFEE',
    'WATCH ANGULAR TUTORIALS',
    'LEARN COMMUNICATIN SKILLS',
  ];
  public todo: string = '';

  public selectedTodo = '';

  constructor() {}

  ngOnInit(): void {}

  selectTodo(i: any) {
    this.selectedTodo = i;
  }
  deleteTodo(i: any) {
    this.todos.splice(i, 1);
  }
  addTodo() {
    this.todos.unshift(this.todo);
    this.todo="";

  }
}
