import { Component, OnInit } from '@angular/core';
import { ProductInterface } from '../../../models/interfaces/product.interface';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) { }
  public products: ProductInterface[];
  ngOnInit(): void {
    this.products = this.productService.products;
  }
}
