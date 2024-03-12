import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ReusableComponent';
  userDetails=[
    {
      name:'Brijesh Mishra',
      email:"b@gmail.com"
    },
    {
      name:'Rahul Mishra',
      email:"r@gmail.com"
    },
    {
      name:'Krishna Mishra',
      email:"k@gmail.com"
    },
    {
      name:'Saniya Mishra',
      email:"s@gmail.com"
    },
  ]
}
