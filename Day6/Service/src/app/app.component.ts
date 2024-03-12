import { Component } from '@angular/core';
import { UserDataService } from './user/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Services in Angular';
  users:any=[];
  constructor (private userdata:UserDataService){
    console.log("userdata",userdata.users());
    this.users = userdata.users();
    console.log(this.users);
    
  }  
}


// memberData=[
  //   {name:'Brijesh',email:'b@gmail.com'},
  //   {name:'Saniya',email:'s@gmail.com'},
  //   {name:'Rashmi',email:'r@gmail.com'},
  //   {name:'Shreya',email:'sh@gmail.com'},
  // ]