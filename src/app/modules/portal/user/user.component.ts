import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    this.user = new FormGroup({
      id:new FormControl("", Validators.minLength(3)),
      fullName:new FormControl("", Validators.minLength(3)),
      userName:new FormControl("", Validators.minLength(3)),
      businessName:new FormControl("", Validators.minLength(3)),
      password:new FormControl("", Validators.minLength(3)),
      gender:new FormControl("Select Gender", Validators.required),
      email:new FormControl("", Validators.minLength(3)),
      contact:new FormControl("", Validators.minLength(3)),
      nTNNumber:new FormControl("", Validators.minLength(3)),
      userType:new FormControl("Select Type", Validators.minLength(3)),
      userStatus:new FormControl("Select Status", Validators.minLength(3)),
      image:new FormControl("", Validators.minLength(3)),
      imagetitle:new FormControl("", Validators.minLength(3)),
      complain:new FormControl("", Validators.minLength(3)),
      address:new FormControl("", Validators.minLength(3)),
      city:new FormControl("", Validators.minLength(3)),
      postal:new FormControl("", Validators.minLength(3))
    });
  }
  updateUser() {
    console.log(this.user.value)
  }
}
