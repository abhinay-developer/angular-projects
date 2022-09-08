import { Component, OnInit } from '@angular/core';

export class Book {
  id: number;
  name: string;
  author: string;
  price: number;

  constructor(id: number, name: string, author: string, price: number) {
    //Intialize the values
    this.id = id;
    this.name = name;
    this.author = author;
    this.price = price;
  }

  public displayBook() {
    console.log(
      `Id:${this.id} Name:${this.name} Author:${this.author} Price :${this.price}`
    );
  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent  implements OnInit{
  title = 'My First Application';
  type:any;
  flag:boolean=false;
  imageURL:string="https://images.pexels.com/photos/13399865/pexels-photo-13399865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  book: Book = new Book(1, 'Java', 'Bala Guru Swamy', 250);
  book1: Book = new Book(1, 'Angular', 'Maxmillian', 450);
  constructor() {
    this.book.displayBook();
  }
  
  ngOnInit(): void {
    if(this.flag==false){
      this.imageURL="https://images.pexels.com/photos/13014389/pexels-photo-13014389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    }
  }
}
