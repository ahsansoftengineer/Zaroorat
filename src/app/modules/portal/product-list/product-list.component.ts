import { Component, OnInit } from "@angular/core";
import { IProduct } from "../../../models/interfaces/product.interface";
import { ProductService } from "../../../services/product.service";
import { ActivatedRoute } from "@angular/router";
import { ProductCategoryService } from "../../../services/product-category.service";
import { IProductCategory } from "../../../models/interfaces/product-category.interface";
import { CustomMethods } from "../../../shared/custom-method";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.scss"],
})
export class ProductListComponent implements OnInit {
  public products: IProduct[];
  public productCategorys: IProductCategory[];
  userId: number;
  public isError: boolean;
  public errMessage: string;
  constructor(
    private productService: ProductService,
    private productCateogry: ProductCategoryService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    // this.userId = parseInt(this.route.snapshot.paramMap.get("id"));
    // if(this.userId > 1){
    //   this.products = this.productService.products.filter(x => x.userId === this.userId);
    // } else {
    //   this.products = this.productService.products;
    // }
    this.getProductCategorys();
    this.refereshProductCategory();
  }
  getProductCategorys() {
    this.productCateogry.getproductCategories().subscribe(
      (productCategorys: IProductCategory[]) => {
        this.productCategorys = productCategorys;
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "Unable to Product Category";
      },
      () => {
        this.isError = false;
        this.errMessage = "Product Category works Fine";
      }
    );
  }
  getImage(fileName: string): string {
    return "../../../../assets/img/" + fileName;
  }
  refereshProductCategory() {
    this.productService.getproducts().subscribe(
      (products) => (this.products = products),
      (err) => {
        console.log(err);
        this.isError = true;
        this.errMessage = err;
      },
      () => {
        this.isError = false;
        this.errMessage = "Date Reterived Successfully";
      }
    );
  }

  // Area for Linearly Displaying the Parents of Parents for the Child
  linearHiarchy: IProductCategory[] = [];
  newparentid: number = 0;
  public prodCatLinear(parent_ID: number): IProductCategory[] {
    this.linearHiarchy = [];
    this.newparentid = 0;
    if (this.productCategorys.length < 1) {
      this.refereshProductCategory();
    }
    this.recursivefunc(parent_ID);
    return this.linearHiarchy;
  }
  public recursivefunc(parent_ID: number) {
    this.linearHiarchy.push(
      this.productCategorys.find((x) => {
        this.newparentid = x.pId;
        if (x.id === parent_ID) {
          return true;
        } else {
          return false;
        }
      })
    );
    if (this.newparentid !== null) {
      this.recursivefunc(this.newparentid);
    } else if(this.newparentid === null){
      this.linearHiarchy.reverse();
    }
  }
}
