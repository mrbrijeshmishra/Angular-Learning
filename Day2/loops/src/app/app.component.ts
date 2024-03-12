import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'loops';

  books = [
    { "name": "Let Us C", "author": "Yashavant Kanetkar", "socialAccount":["Insta,fb,gmail"]},
    { "name": "Rich Dad Poor Dad", "author": "Robert Kiyosaki ", "socialAccount":["Insta,fb,gmail"]},
    { "name": "Introduction to Algorithms", "author": "Cormen", "socialAccount":["Insta,fb,gmail"]},
  ]

  // books = [
  //   { "name": "Let Us C", "author": "Yashavant Kanetkar", "social account":"Fb"},
  //   { "name": "Rich Dad Poor Dad", "author": "Robert Kiyosaki ", "social account":"Twitter"},
  //   { "name": "Introduction to Algorithms", "author": "Cormen", "social account":"Insta"},
  // ]

  users = ['Brijesh','Yogendra','Sumiran','Krishna']
}
