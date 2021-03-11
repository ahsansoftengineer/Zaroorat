import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { TreeviewItem } from "ngx-treeview";
import { CustomMethods } from "../../../shared/custom-method";
import { IProductCategory } from "../../../models/interfaces/product-category.interface";
import { ProductCategoryService } from "../../../services/product-category.service";

@Component({
  selector: "app-product-category-hiarchy",
  templateUrl: "./product-category-hiarchy.component.html",
  styleUrls: ["./product-category-hiarchy.component.scss"],
})
export class ProductCategoryHiarchyComponent implements OnInit {
  @Output()
  prodCategoryId_Name = new EventEmitter<{ id: number; name: string }>();

  list1: number = 0;
  list2: number = 0;
  list3: number = 0;
  list4: number = 0;
  isError: boolean = false;
  errMessage: string = "";
  selectedResult: string = "none";
  productCategories: IProductCategory[] = [];
  productCategoryTreeView: TreeviewItem[] = [];
  constructor(public productCategoryService: ProductCategoryService) {}

  ngOnInit(): void {
    this.refereshProductCategory();
  }
  productCategoryItemClick(id: number, text: string, level: number): string {
    this.selectedResult = id + " = " + text;
    if (level == 1) {
      this.list1 = id;
    } else if (level == 2) {
      this.list2 = id;
    } else if (level == 3) {
      this.list3 = id;
    } else if (level == 4) {
      this.list4 = id;
    }
    event.stopPropagation();
    this.prodCategoryId_Name.emit({ id: id, name: text });
    return this.selectedResult;
  }
  refereshProductCategory() {
    this.productCategoryService.getproductCategories().subscribe(
      (productCategories) => (this.productCategories = productCategories),
      (err) => {
        console.log(err);
        this.isError = true;
        this.errMessage = err;
      },
      () => {
        this.productCategoryTreeView = CustomMethods.startRecursiveFunction(
          this.productCategories
        );
        this.isError = false;
        this.errMessage = "Date Reterived Successfully";
      }
    );
  }
}
