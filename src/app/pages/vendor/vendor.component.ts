import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  user: FormGroup = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    this.user = new FormGroup({
      id:new FormControl(""),
      userName:new FormControl("", Validators.minLength(3)),
      gender:new FormControl("", Validators.minLength(3)),
      email:new FormControl("", Validators.minLength(3)),
      access:new FormControl("", Validators.minLength(3)),
      businessName:new FormControl("", Validators.minLength(3)),
      contact:new FormControl("", Validators.minLength(3)),
      nTNNumber:new FormControl("", Validators.minLength(3)),
      userstatus:new FormControl("", Validators.minLength(3)),
      complain:new FormControl("", Validators.minLength(3)),
      image:new FormControl("", Validators.minLength(3))
    });
  }
  updateUser() {
    console.log(this.user.value)
  }
}
