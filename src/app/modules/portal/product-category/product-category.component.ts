import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { TreeviewItem } from "ngx-treeview";
import { CustomMethods } from "../../../shared/custom-method";
import { IProductCategory } from "../../../models/interfaces/product-category.interface";
import { ProductCategoryService } from "../../../services/product-category.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

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
  ParentID = 0;
  constructor(
    public productCategoryService: ProductCategoryService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.productCategoryForm = new FormGroup({
      id: new FormControl(""),
      category: new FormControl("", Validators.minLength(3)),
      pId: new FormControl(""),
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
        this.productCategoryTreeView = CustomMethods.startRecursiveFunction(
          this.productCategories
        );
        this.isError = false;
        this.errMessage = "Date Reterived Successfully";
      }
    );
  }
  getProductCategory() {
    const id: number = this.productCategoryForm.value.id;
    this.productCategoryService.getproductCategory(id).subscribe(
      (prodCat: IProductCategory) => {
        this.mapModelToFormValues(prodCat);
        this.productCategory = prodCat;
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "Unable to display result of ID " + id;
        this.productCategoryForm = CustomMethods.setAllControlBlank(
          this.productCategoryForm
        );
      },
      () => {
        this.isError = false;
        this.errMessage = "Showing Result of ID " + id;
      }
    );
  }
  insert() {
    this.mapFormValuesToModel();
    // this.productCategory.id = null;
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
    this.mapFormValuesToModel();
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
    this.mapFormValuesToModel();
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
  editProductCategory(productCategory: IProductCategory) {
    this.mapModelToFormValues(productCategory);
  }
  prodCategoryId_Name(event: { id: number; name: string }) {
    this.productCategoryForm.patchValue({
      pId: event?.id + " = " + event?.name,
    });
    this.ParentID = event?.id;
  }
  open(content) {
    this.modalService.open(content, { ariaLabelledBy: "modal-basic-title" })
      .result;
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
  mapModelToFormValues(productCategory: IProductCategory) {
    this.productCategoryForm.patchValue({
      id: productCategory.id,
      category: productCategory.category,
      pId: productCategory.pId,
      description: productCategory.description,
    });
    this.ParentID = productCategory.pId;
    // this.createForm.setControl('skills', this.setExistingSkills(employee.skills))
    this.productCategoryForm.markAsDirty();
    this.productCategoryForm.markAsTouched();
  }
  mapFormValuesToModel() {
    this.productCategory = {
      id: this.productCategoryForm.value?.id,
      pId: this.ParentID,
      category: this.productCategoryForm.value?.category,
      description: this.productCategoryForm.value?.description,
    };
  }
}
