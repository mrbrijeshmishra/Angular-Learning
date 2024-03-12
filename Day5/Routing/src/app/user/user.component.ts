import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{

  userId:any="";
  constructor(private router:ActivatedRoute){}

  // constructor(private router:Router){}

  ngOnInit():void {
    console.warn("user id is:",this.router.snapshot.paramMap.get('num'));
    this.userId = this.router.snapshot.paramMap.get('num')
    // this.router.navigate(['num']);
  }

}

// This is used when we want to navigate to a url
// this.router.navigate(['num']);

// import { Router } from '@angular/router';
// after this import Router  adn in constructor
// constructor(private router:Router){}
// ngOnInit():void{
//   this.router.navigate(['num']);
// }
