import { Component } from '@angular/core';
import { UserDataService } from '../services/users-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  users:any;
  constructor(private userData:UserDataService){
    userData.users().subscribe((data)=>{console.warn("data",data);
    this.users=data
  });
}


}
