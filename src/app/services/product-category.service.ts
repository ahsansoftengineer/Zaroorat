import { Injectable } from "@angular/core";
import { ProductCategoryInterface } from "../models/interfaces/product-category.interface";

@Injectable()
export class ProductCategoryService implements ProductCategoryInterface {
  public id: number;
  public category: string;
  public parentCategoryId?: number;
  public description: string;

  constructor() {}

  public productCategories: ProductCategoryInterface[] = [
    { id: 1, parentCategoryId:null, description:"n/a", category: "Beverages" },
    { id: 2, parentCategoryId:1, description:"n/a", category: "Soft Drink" },
    { id: 3, parentCategoryId:1, description:"n/a", category: "Juice" },
    { id: 4, parentCategoryId:1, description:"n/a", category: "Burger" },
    { id: 5, parentCategoryId:1, description:"n/a", category: "Pizza" },
    { id: 6, parentCategoryId:2, description:"n/a", category: "Pepsi" },
    { id: 7, parentCategoryId:2, description:"n/a", category: "Cocacola" },
    { id: 8, parentCategoryId:2, description:"n/a", category: "7Up" },
    { id: 9, parentCategoryId:null, description:"n/a", category: "Electronics" },
    { id: 10,parentCategoryId:9, description:"n/a", category: "PC" },
    { id: 11,parentCategoryId:9, description:"n/a", category: "Tablets" },
    { id: 12,parentCategoryId:9, description:"n/a", category: "Mobile" },
    { id: 13,parentCategoryId:12, description:"n/a", category: "iPhone" },
    { id: 14,parentCategoryId:12, description:"n/a", category: "Samsung" },
    { id: 15,parentCategoryId:12, description:"n/a", category: "Nokia" },
    { id: 16,parentCategoryId:9, description:"n/a", category: "Tablets" },
  ];
  // restCategory: ProductCategoryInterface[];
  // space: string = '';
  // startRecursiveFunction(){
  //   this.productCategories.filter(x => x.id = null).forEach(parentCategory => {
  //     console.log(this.space + 'ID = ' + parentCategory.id +' Name = ' + parentCategory.category)
  //     this.repeatRecursiveFunction(this.productCategories.filter(x => x.parentCategoryId === parentCategory.id))
  //   });
  //   this.space = '';
  // }
  // repeatRecursiveFunction(childCategories: ProductCategoryInterface[]){
  //   this.space = this.space + '  ';
  //   childCategories.forEach(childCategory => {
  //     console.log(this.space + 'ID = ' + childCategory.id +' Name = ' + childCategory.category)
  //     this.repeatRecursiveFunction(this.productCategories.filter(x => x.parentCategoryId === childCategory.id))
  //   });
  // }
}
