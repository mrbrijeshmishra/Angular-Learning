import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reactive Form';
  // loginForm = new FormGroup({
  //   username:new FormControl('Brijesh',[Validators.required]),
  //   password:new FormControl('123456',[Validators.required]),
  // })
  // Set default value if user tries to submit blank fields.


  loginForm:any = new FormGroup({
    username:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
  })
  userLogIn(){
    console.log(this.loginForm.value);
  }

  get user(){
    return this.loginForm.get('username')
  }
  get pass(){
    return this.loginForm.get('password')
  }
}
