import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pipes in Angular';
  today = Date();
  capString(item:string){
    return item.toUpperCase();
  }

  user = {
    name:"Brijesh",
    age:25
    }
}
