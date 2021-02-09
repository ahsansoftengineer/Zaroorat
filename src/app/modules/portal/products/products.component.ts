import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  product: FormGroup = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    this.product = new FormGroup({
      id: new FormControl(""),
      productTitle: new FormControl("", Validators.minLength(3)),
      category: new FormControl("", Validators.minLength(3)),
      stock: new FormControl("", Validators.required),
      sale: new FormControl("", Validators.required),
      wholeSaleRate: new FormControl("", Validators.required),
      retailRate: new FormControl("", Validators.required),
      tex: new FormControl("", Validators.required),
      shipmentCharges: new FormControl("", Validators.required),
      productImage: new FormControl("", Validators.minLength(3)),
      galleryImage: new FormControl("", Validators.required),
      featured: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    });
  }
  updateProduct() {
    console.log(this.product.value)
  }
}
