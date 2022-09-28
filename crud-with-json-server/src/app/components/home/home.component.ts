import { Router } from '@angular/router';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usersList: any[];

  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  public  getAllUsers() {
    this.ds.getAllUsers().subscribe(
      (res: any) => {
        console.log(res);
        this.usersList = [...res];
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
  public delete(id:any){
    this.ds.deleteUserById(id).subscribe(
      (res:any)=>{
        console.log(res);
        this.getAllUsers();
      }
    )
  }

  public update(id:any){
    this.router.navigate(['signup',id])
  }
  
}
