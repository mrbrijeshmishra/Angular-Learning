import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
    selector: 'my-app',
    template: `
        <div><h3>Response</h3>{{response|async|json}}</div>
        <button (click)="request()">Make request</button>`
    ,
})
export class AppComponent {
  response: Observable<any>;

  constructor(private http: HttpClient) {
      this.response = new Observable<any>(); // Initialize as empty observable
  }

    request() {
        const url = 'https://jsonplaceholder.typicode.com/posts/1';
        this.response = this.http.get(url, {observe: 'body'});
    }
}
