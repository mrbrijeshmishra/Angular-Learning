import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'StyleBinding';
  color='blue';
  bgColor='green';

  updateColor(){
    this.color="violet";
    this.bgColor="black"
  }
}
