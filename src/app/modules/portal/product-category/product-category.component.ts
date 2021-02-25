import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TreeviewItem } from "ngx-treeview";
import { IProductCategory } from "../../../models/interfaces/product-category.interface";
import { ProductCategoryService } from "../../../services/product-category.service";

@Component({
  selector: "app-product-category",
  templateUrl: "./product-category.component.html",
  styleUrls: ["./product-category.component.scss"],
})
export class ProductCategoryComponent implements OnInit {
  product: FormGroup = new FormGroup({});
  productCategories: IProductCategory[];
  productCategoryTreeView: TreeviewItem[];
  constructor(public productCategoryService: ProductCategoryService) {
    this.productCategoryTreeView = this.productCategoryService.treeviewItem;
    this.productCategories = this.productCategoryService.productCategories;
  }
  ngOnInit(): void {
    this.product = new FormGroup({
      id: new FormControl(""),
      category: new FormControl("", Validators.minLength(3)),
      parentCategoryId: new FormControl(),
      description: new FormControl(""),
    });
  }
  updateProduct() {
    console.log(this.product.value);
  }
  // Tree View Settings
  config = {
    hasAllCheckBox: false,
    hasFilter: true,
    hasCollapseExpand: true,
    decoupleChildFromParent: true,
    maxHeight: 700,
  };
  onSelectedChange(selectedItemId: string) {
    console.log(selectedItemId);
  }
  onFilterChange(filterTreeView: string) {
    // console.log(filterTreeView);
  }
  captureID(id: string) {
    console.log(id);
  }
}
