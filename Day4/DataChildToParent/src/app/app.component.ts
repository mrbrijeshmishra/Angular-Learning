import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sending Data From Child To Parent';
  data="x";
  updateData(item:string){
    // console.log(item);
    console.log(this.data);
    this.data=item;
    console.log("After Update:",item);
  }
}
