import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'counter';

  count=0

  // counter(){
  //   this.count++
  // }

  // counterN(){
  //   this.count--
  // }

  counter(type:string){
    type==='add'?this.count++ : this.count--
  }
}
