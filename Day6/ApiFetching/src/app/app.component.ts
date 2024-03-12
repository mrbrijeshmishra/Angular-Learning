import { Component } from '@angular/core';
import { UserDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ApiFetching and Api Post';
  users:any;
  constructor(private userData:UserDataService){
    userData.users().subscribe((data)=>{console.warn("data",data);
    this.users=data
  });
}
getUserFormData(data:any){
  console.warn(data);
  this.userData.saveUsers(data).subscribe((result)=>{console.warn(result)})
}
}
