import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
  // import 'cropperjs/dist/cropper.css';
  import Cropper from 'cropperjs';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    this.user = new FormGroup({
      id:new FormControl(""),
      fullName:new FormControl("", Validators.minLength(3)),
      userName:new FormControl("", Validators.minLength(3)),
      gender:new FormControl("Select Gender", Validators.required),
      email:new FormControl("", Validators.minLength(3)),
      userType:new FormControl("", Validators.minLength(3)),
      businessName:new FormControl("", Validators.minLength(3)),
      contact:new FormControl("", Validators.minLength(3)),
      nTNNumber:new FormControl(),
      userstatus:new FormControl("Pending"), // Default
      complain:new FormControl(""), // Default Blank
      image:new FormControl("", Validators.minLength(3)) // Required for User verification
    });
  }
  updateUser() {
    console.log(this.user.value)
  }
}
