import { Component } from '@angular/core';

@Component({
  selector: 'app-box-value',
  templateUrl: './box-value.component.html',
  styleUrls: ['./box-value.component.scss'],
})
export class BoxValueComponent {
  title:any = 'Getting Input Box Value and Displaying It';

  displayVal:string="";

  getValue(value:string){
    console.warn(value)
    this.displayVal=value
  }
}
