import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    this.user = new FormGroup({
      password:new FormControl("", Validators.minLength(5)),
      confirmPassword:new FormControl("", Validators.minLength(7)),
    });
  }
  changePassword(){
    console.log(this.user.value)
  }

}
