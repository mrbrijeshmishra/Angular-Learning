import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '16';
  data = "Brijesh";
  getValue(){
    return "Get Function Data"
  };
  nValue = 100;
}
