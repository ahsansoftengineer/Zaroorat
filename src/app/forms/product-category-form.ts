import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { BaseForm } from "./base-form";

@Injectable()
export class ProductCategoryForm extends BaseForm {
  constructor(protected fb: FormBuilder) {
    super(fb);
  }
  getForm() {
    this.markAsSubmitted(false);
    return (this.form = this.fb.group({
      id: [0, Validators.compose([Validators.required])],
      category: ["", Validators.compose([Validators.required])],
      parentCategoryId: [0, Validators.compose([Validators.required])],
      description: ["", Validators.compose([Validators.required])],
    }));
  }
}
