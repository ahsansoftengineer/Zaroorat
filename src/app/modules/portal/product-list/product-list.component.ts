import { Component, OnInit } from "@angular/core";
import { IProduct } from "../../../models/interfaces/product.interface";
import { ProductService } from "../../../services/product.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  public products: IProduct[];
  userId: number;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.userId = parseInt(this.route.snapshot.paramMap.get("id"));
    if(this.userId > 1){
      this.products = this.productService.products.filter(x => x.userId === this.userId);
    } else {
      this.products = this.productService.products;
    }
  }
  ngOnInit(): void {

    // debugger
    // if((this.userid))
    // this.products = this.productService.products;
    // console.log(this.userId);
  }
}
