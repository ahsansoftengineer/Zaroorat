import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { BaseForm } from "./base-form";

@Injectable()
export class UserForm extends BaseForm {
  constructor(protected fb: FormBuilder) {
    super(fb);
  }
  getForm() {
    this.markAsSubmitted(false);
    return (this.form = this.fb.group({
      id: [""],
      fullName: ["", Validators.compose([Validators.required])],
      userName: ["", Validators.compose([Validators.required])],
      businessName: ["", Validators.compose([Validators.required])],
      password: ["", Validators.compose([Validators.required])],
      gender: ["", Validators.compose([Validators.required])],
      email: ["", Validators.compose([Validators.required])],
      contact: ["", Validators.compose([Validators.required])],
      nTNNumber: ["", Validators.compose([Validators.required])],
      userType: ["", Validators.compose([Validators.required])],
      userStatus: ["", Validators.compose([Validators.required])],
      image: ["", Validators.compose([Validators.required])],
      imagetitle: ["", Validators.compose([Validators.required])],
      complain: ["", Validators.compose([Validators.required])],
      address: ["", Validators.compose([Validators.required])],
      city: ["", Validators.compose([Validators.required])],
      postal: ["", Validators.compose([Validators.required])],
      background: ["", Validators.compose([Validators.required])],
      sidebar: ["", Validators.compose([Validators.required])],
    }));
  }
}
