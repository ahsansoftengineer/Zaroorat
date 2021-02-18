import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProductCategory } from '../../../models/interfaces/product-category.interface';
import { ProductCategoryService } from '../../../services/product-category.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {
  product: FormGroup = new FormGroup({});
  productCategories: IProductCategory[];

  constructor(public productCategoryService: ProductCategoryService) {}
  ngOnInit(): void {
    this.productCategories = this.productCategoryService.productCategories;
    this.product = new FormGroup({
      id: new FormControl(""),
      category: new FormControl("", Validators.minLength(3)),
      parentCategoryId: new FormControl(),
      description: new FormControl(""),
    });
  }
  updateProduct() {
    console.log(this.product.value)
  }
}
