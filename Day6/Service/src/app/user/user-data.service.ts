import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor() { }
  users() {
    return [
      { name: 'Brijesh', email: 'b@gmail.com' },
      { name: 'Saniya', email: 's@gmail.com' },
      { name: 'Rashmi', email: 'r@gmail.com' },
      { name: 'Shreya', email: 'sh@gmail.com' },
    ]
  }
}
