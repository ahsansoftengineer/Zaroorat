import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    this.user = new FormGroup({
      userName:new FormControl("", Validators.minLength(5)),
      password:new FormControl("", Validators.minLength(7)),
    });
  }
  signIn(){
    console.log(this.user.value)
  }
}
