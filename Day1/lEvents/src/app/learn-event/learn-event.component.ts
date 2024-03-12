import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-event',
  templateUrl: './learn-event.component.html',
  styleUrls: ['./learn-event.component.scss']
})
export class LearnEventComponent {

  getData(val:any){
    console.log(val);
    
  }

}
