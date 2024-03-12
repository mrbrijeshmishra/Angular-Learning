import { Component } from '@angular/core';
import { UserDataService } from '../user/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  users:any=[];
  constructor (private userdata:UserDataService){
    console.log("userdata",userdata.users());
    this.users = userdata.users();
    console.log(this.users);
    
  } 
}
