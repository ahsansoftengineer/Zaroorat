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

// Miner Problem the Items Parent Deleted are not Categorise !!!
// Delete Confirmation

export class ProductCategoryComponent implements OnInit {
  productCategoryForm: FormGroup;
  productCategories: IProductCategory[];
  productCategory: IProductCategory;
  productCategoryTreeView: TreeviewItem[] = [];
  errMessage: string = "error Message to Display";
  isError: boolean = false;

  constructor(public productCategoryService: ProductCategoryService) {}

  ngOnInit(): void {
    this.productCategoryForm = new FormGroup({
      id: new FormControl(""),
      category: new FormControl("", Validators.minLength(3)),
      pId: new FormControl(),
      description: new FormControl(""),
    });
    this.refereshProductCategory();
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
        this.startRecursiveFunction();
        this.isError = false;
        this.errMessage = "Date Reterived Successfully";
      }
    );
  }
  getProductCategory() {
    const id: number = this.productCategoryForm.value.id;
    this.productCategoryService.getproductCategory(id).subscribe(
      (prodCat: IProductCategory) => {
        this.editProductCategory(prodCat);
        this.productCategory = prodCat;
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "Unable to display result of ID " + id;
        this.productCategoryForm.patchValue({
          pId: null,
          category: "",
          description: "",
        });
      },
      () => {
        this.isError = false;
        this.errMessage = "Showing Result of ID " + id;
      }
    );
  }
  editProductCategory(productCategory: IProductCategory) {
    this.productCategoryForm.patchValue({
      id: productCategory.id,
      category: productCategory.category,
      pId: productCategory.pId,
      description: productCategory.description,
    });
    // this.createForm.setControl('skills', this.setExistingSkills(employee.skills))
    this.productCategoryForm.markAsDirty();
    this.productCategoryForm.markAsTouched();
  }
  insert() {
    this.mapFormValuesToEmployeeModel();
    this.productCategory.id = null;
    this.productCategoryService
      .addproductCategory(this.productCategory)
      .subscribe(
        () => {
          this.errMessage =
            this.productCategory.category +
            " created under subcategory Id " +
            this.productCategory.pId +
            " Please Referesh Data";
          this.isError = false;
        },
        (err) => {
          console.log(err);
          this.errMessage = this.productCategory.category + " not created";
          this.isError = true;
        }
      );
  }
  update() {
    this.mapFormValuesToEmployeeModel();
    this.productCategoryService
      .updateproductCategory(this.productCategory)
      .subscribe(
        () => {
          this.errMessage =
            this.productCategory.id +
            " " +
            this.productCategory.category +
            " updated successfully! Please Referesh Data";
          this.isError = false;
        },
        (err) => {
          console.log(err);
          this.errMessage =
            this.productCategory.id +
            " " +
            this.productCategory.category +
            " not updated";
          this.isError = true;
        }
      );
  }
  delete() {
    this.mapFormValuesToEmployeeModel();
    this.productCategoryService
      .deleteproductCategory(this.productCategory.id)
      .subscribe(
        () => {
          this.errMessage =
            this.productCategory.id +
            " " +
            this.productCategory.category +
            " deleted successfully! Please Referesh Data";
          this.isError = false;
        },
        (err) => {
          console.log(err);
          this.errMessage =
            this.productCategory.id +
            " " +
            this.productCategory.category +
            " not deleted";
          this.isError = true;
        }
      );
  }
  productCategoryItemClick(id: string) {
    this.productCategoryForm.patchValue({
      pId: id,
    });
    event.stopPropagation();
  }
  // Hiearchy Structure of Product Category
  startRecursiveFunction() {
    this.productCategoryTreeView = [];
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
        this.productCategoryTreeView.push(parentTreeView);
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
      const childs = this.productCategories.filter((x) => x.pId === cc.id);
      if (childs) {
        this.repeatRecursiveFunction(childs, childTreeView);
      }
      if (parentTree.children == undefined) {
        parentTree.children = [childTreeView];
      } else {
        parentTree.children.push(childTreeView);
      }
    });
  }
  mapFormValuesToEmployeeModel() {
    this.productCategory.id = this.productCategoryForm.value.id;
    this.productCategory.category = this.productCategoryForm.value.category;
    this.productCategory.pId = this.productCategoryForm.value.pId;
    this.productCategory.description = this.productCategoryForm.value.description;
  }
}
