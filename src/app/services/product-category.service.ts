      import { Injectable } from "@angular/core";
      import { IProductCategory } from "../models/interfaces/product-category.interface";
      import { TreeviewItem } from "ngx-treeview";

      // text: string;
      // value: any;
      // disabled?: boolean;
      // checked?: boolean;
      // collapsed?: boolean;
      // children?: TreeItem[];
      @Injectable()
      export class ProductCategoryService implements IProductCategory {
        public id: number;
        public category: string;
        public pId?: number;
        public description: string;
        public treeviewItem: TreeviewItem[]= [];
        constructor() {
          this.treeviewItem = [];
          this.startRecursiveFunction();
        }
        public productCategories: IProductCategory[] = [
          { id: 1, pId: null, description: "n/a", category: "Beverages"},
          { id: 2, pId: 1, description: "n/a", category: "Soft Drink" },
          { id: 3, pId: 1, description: "n/a", category: "Juice" },
          { id: 4, pId: 1, description: "n/a", category: "Burger" },
          { id: 5, pId: 1, description: "n/a", category: "Pizza" },
          { id: 6, pId: 2, description: "n/a", category: "Pepsi" },
          { id: 7, pId: 2, description: "n/a", category: "Cocacola" },
          { id: 8, pId: 2, description: "n/a", category: "7Up" },
          { id: 9, pId: null, description: "n/a", category: "Electronics"},
          { id: 10, pId: 9, description: "n/a", category: "PC" },
          { id: 11, pId: 9, description: "n/a", category: "Tablets" },
          { id: 12, pId: 9, description: "n/a", category: "Mobile" },
          { id: 13, pId: 12, description: "n/a", category: "iPhone" },
          { id: 14, pId: 12, description: "n/a", category: "Samsung" },
          { id: 15, pId: 12, description: "n/a", category: "Nokia" },
          { id: 16, pId: 12, description: "n/a", category: "Huawei" },
        ];
        startRecursiveFunction() {
          this.productCategories
            .filter((x) => x.pId === null)
            .forEach((parentCategory) => {
              const parentTreeView = new TreeviewItem({
                value: parentCategory.id,
                text: parentCategory.category,
              });
              const childs = this.productCategories.filter(
                (x) => x.pId === parentCategory.id
              );
              if (childs) {
                this.repeatRecursiveFunction(childs, parentTreeView);
              }
              this.treeviewItem.push(parentTreeView);
            });
        }
        repeatRecursiveFunction(
          childCategories: IProductCategory[],
          parentTree: TreeviewItem
        ) {
          childCategories.forEach((cc) => {
            const childTreeView = new TreeviewItem({
              value: cc.id,
              text: cc.category,
            });
            const childs = this.productCategories.filter(
              (x) => x.pId === cc.id
            );
            if (childs) {
              this.repeatRecursiveFunction(childs, childTreeView);
            }
            if(parentTree.children == undefined){
              parentTree.children = [childTreeView];
            }else{
              parentTree.children.push(childTreeView);
            }
          });
        }
      }
