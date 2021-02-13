import { FormBuilder, Validators } from "@angular/forms";
import { Injectable } from "@angular/core";
import { BaseForm } from "./base-form";

@Injectable()
export class ProductForm extends BaseForm {
  constructor(protected fb: FormBuilder) {
    super(fb);
  }
  getForm() {
    this.markAsSubmitted(false);
    return (this.form = this.fb.group({
      id: ["", Validators.compose([Validators.required])],
      productTitle: ["", Validators.compose([Validators.required])],
      category: ["", Validators.compose([Validators.required])],
      stock: ["", Validators.compose([Validators.required])],
      sale: ["", Validators.compose([Validators.required])],
      wholeSaleRate: ["", Validators.compose([Validators.required])],
      retailRate: ["", Validators.compose([Validators.required])],
      tex: ["", Validators.compose([Validators.required])],
      shipmentCharges: ["", Validators.compose([Validators.required])],
      productImage: ["", Validators.compose([Validators.required])],
      galleryImage: ["", Validators.compose([Validators.required])],
      featured: ["", Validators.compose([Validators.required])],
      description: ["", Validators.compose([Validators.required])],
    }));
  }
}
