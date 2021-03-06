import { Component, Input, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { CustomMethods } from "../../../shared/custom-method";
import { IProduct } from "../../../models/interfaces/product.interface";
import { ProductService } from "../../../services/product.service";
import { IProductCategory } from "../../../models/interfaces/product-category.interface";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productForm: FormGroup;
  defaultPath: string = "../../../../assets/img/";
  // products: IProduct[];
  product: IProduct;
  // For Image
  productImage: string = this.defaultPath + "upload.png";
  galleryImage: string = this.defaultPath + "upload.png";
  productFileName: string = "upload.png";
  galleryFileName: string = "upload.png";
  productCategoryId: number;
  ParentID = 0;
  productCategories: IProductCategory[];
  errMessage: string = "no errors";
  isError: boolean = false;

  constructor(
    public productService: ProductService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(0),
      productTitle: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      productTypeId: new FormControl("", Validators.required),
      stock: new FormControl("", Validators.required),
      sale: new FormControl("", Validators.required),
      wholeSaleRate: new FormControl(""),
      retailRate: new FormControl("", Validators.required),
      tex: new FormControl(""),
      shipmentCharges: new FormControl("", Validators.required),
      productImage: new FormControl(this.productFileName),
      galleryImage: new FormControl(this.galleryFileName),
      featured: new FormControl(false, Validators.required),
      userId: new FormControl("", Validators.required),
      description: new FormControl(""),
    });
  }
  fileName_File(event: { name: string; file: string }, imageNumber: number) {
    if (imageNumber === 1) {
      this.productImage = event.file;
      this.productForm.patchValue({
        productImage: event.name,
      });
    } else {
      this.galleryImage = event.file;
      this.productForm.patchValue({
        galleryImage: event.name,
      });
    }
  }
  getProduct() {
    const id = this.productForm.value.id;
    this.productService.getproduct(id).subscribe(
      (product: IProduct) => {
        this.mapModelValuesToForm(product);
        this.product = product;
        this.productFileName = product.productImage;
        this.galleryFileName = product.galleryImage;
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "Unable to display result of ID " + id;
        // In case error set all controls blank
        this.productForm = CustomMethods.setAllControlBlank(this.productForm);
        this.productFileName = "upload.png";
        this.galleryFileName = "upload.png";
      },
      () => {
        this.isError = false;
        this.errMessage = "Showing Result of ID " + id;
      }
    );
  }
  insert() {
    this.mapFormValuesToModel();
    this.product.id = null;
    this.productService.addproduct(this.product).subscribe(
      () => {
        this.errMessage =
          this.product.productTitle +
          " created under Product Category Id " +
          this.product.productTypeId;
        this.isError = false;
      },
      (err) => {
        console.log(err);
        this.errMessage = this.product.productTitle + " not created";
        this.isError = true;
      }
    );
  }
  update() {
    this.mapFormValuesToModel();
    this.productService.updateproduct(this.product).subscribe(
      () => {
        this.errMessage =
          this.product.id +
          " " +
          this.product.productTitle +
          " updated successfully! Please Referesh Data";
        this.isError = false;
      },
      (err) => {
        console.log(err);
        this.errMessage =
          this.product.id + " " + this.product.productTitle + " not updated";
        this.isError = true;
      }
    );
  }
  delete() {
    this.mapFormValuesToModel();
    this.productService.deleteproduct(this.product.id).subscribe(
      () => {
        this.errMessage =
          this.product.id +
          " " +
          this.product.productTitle +
          " deleted successfully! Please Referesh Data";
        this.isError = false;
      },
      (err) => {
        console.log(err);
        this.errMessage =
          this.product.id + " " + this.product.productTitle + " not deleted";
        this.isError = true;
      }
    );
  }
  prodCategoryId_Name(event: { id: number; name: string }) {
    this.productForm.patchValue({
      productTypeId: event?.id + " = " + event?.name,
    });
    this.ParentID = event?.id;
  }
  mapModelValuesToForm(product: IProduct) {
    this.productForm.patchValue({
      id: product.id,
      productTitle: product.productTitle,
      productTypeId: product.productTypeId,
      stock: product.stock,
      sale: product.sale,
      wholeSaleRate: product.wholeSaleRate,
      retailRate: product.retailRate,
      tex: product.tex,
      shipmentCharges: product.shipmentCharges,
      productImage: product.productImage,
      galleryImage: product.galleryImage,
      featured: product.featured,
      userId: product.userId,
      description: product.description,
    });
    this.ParentID = product?.productTypeId;
    this.productForm.markAsDirty();
    this.productForm.markAsTouched();
  }
  mapFormValuesToModel() {
    this.product = {
      id: this.productForm.value.id,
      productTitle: this.productForm.value.productTitle,
      stock: this.productForm.value.stock,
      sale: this.productForm.value.sale,
      wholeSaleRate: this.productForm.value.wholeSaleRate,
      retailRate: this.productForm.value.retailRate,
      tex: this.productForm.value.tex,
      shipmentCharges: this.productForm.value.shipmentCharges,
      productImage: this.productForm.value.productImage,
      galleryImage: this.productForm.value.galleryImage,
      featured: this.productForm.value.featured,
      userId: this.productForm.value.userId,
      description: this.productForm.value.description,
      productTypeId: this.ParentID,
    };
  }
  open(modal) {
    this.modalService.open(modal);
  }
}
