import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { IProduct } from "../../../models/interfaces/product.interface";
import { ProductService } from "../../../services/product.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  products: IProduct[];
  product: IProduct;
  defaultImagePath: string = "../../../../assets/img/Select Image.png";
  imgGallery: string = this.defaultImagePath;
  imgProduct: string = this.defaultImagePath;
  selectedFileName: string = "File Name";
  currentFileToDisplay: string = "productImage";
  errMessage: string = "error Message to Display";
  isError: boolean = false;

  constructor(public productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl(""),
      productTitle: new FormControl("", Validators.minLength(3)),
      productTypeId: new FormControl("", Validators.required),
      stock: new FormControl("", Validators.required),
      sale: new FormControl("", Validators.required),
      wholeSaleRate: new FormControl("", Validators.required),
      retailRate: new FormControl("", Validators.required),
      tex: new FormControl("", Validators.required),
      shipmentCharges: new FormControl("", Validators.required),
      productImage: new FormControl("", Validators.minLength(3)),
      galleryImage: new FormControl("", Validators.required),
      featured: new FormControl("", Validators.required),
      userId: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    });
    // this.refereshProductCategory();
  }
  onFileChange(event, activeControl: string) {
    const reader = new FileReader();
    this.currentFileToDisplay = activeControl;
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      let fileName: string = event.target.files[0].name;
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (activeControl === "galleryImage") {
          this.imgGallery = reader.result as string;
          document.getElementById("galleryFileName").innerHTML = fileName;
          // this.product.patchValue({
          //   galleryImageSrc: reader.result,
          // });
        } else if (activeControl === "productImage") {
          this.imgProduct = reader.result as string;
          document.getElementById("productFileName").innerHTML = fileName;
        }
      };
    } else {
      if (activeControl === "galleryImage") {
        document.getElementById("galleryFileName").innerHTML =
          "Please Select Image";
        this.imgGallery = this.defaultImagePath;
      } else if (activeControl === "productImage") {
        document.getElementById("productFileName").innerHTML =
          "Please Select Image";
        this.imgProduct = this.defaultImagePath;
      }
    }
  }
  getProduct() {
    const id: number = this.productForm.value.id;
    this.productService.getproduct(id).subscribe(
      (product: IProduct) => {
        this.mapModelValuesToForm(product);
        this.product = product;
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "Unable to display result of ID " + id;
        // In case error set all controls blank
        this.setAllControlBlank(this.productForm);
      },
      () => {
        this.isError = false;
        this.errMessage = "Showing Result of ID " + id;
      }
    );
  }

  insert() {
    this.mapFormValuesToEmployeeModel();
    this.product.id = null;
    this.productService
      .addproduct(this.product)
      .subscribe(
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
    this.mapFormValuesToEmployeeModel();
    this.productService
      .updateproduct(this.product)
      .subscribe(
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
            this.product.id +
            " " +
            this.product.productTitle +
            " not updated";
          this.isError = true;
        }
      );
  }
  delete() {
    this.mapFormValuesToEmployeeModel();
    this.productService
      .deleteproduct(this.product.id)
      .subscribe(
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
            this.product.id +
            " " +
            this.product.productTitle +
            " not deleted";
          this.isError = true;
        }
      );
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
    // this.createForm.setControl('skills', this.setExistingSkills(employee.skills))
    this.productForm.markAsDirty();
    this.productForm.markAsTouched();
  }
  mapFormValuesToModel() {
    this.product.id = this.productForm.value.id
    this.product.productTitle = this.productForm.value.productTitle
    this.product.productTypeId = this.productForm.value.productTypeId
    this.product.stock = this.productForm.value.stock
    this.product.sale = this.productForm.value.sale
    this.product.wholeSaleRate = this.productForm.value.wholeSaleRate
    this.product.retailRate = this.productForm.value.retailRate
    this.product.tex = this.productForm.value.tex
    this.product.shipmentCharges = this.productForm.value.shipmentCharges
    this.product.productImage = this.productForm.value.productImage
    this.product.galleryImage = this.productForm.value.galleryImage
    this.product.featured = this.productForm.value.featured
    this.product.userId = this.productForm.value.userId
    this.product.description = this.productForm.value.description
  }
  public setAllControlBlank(group: FormGroup | FormArray): void {
    Object.keys(group.controls).forEach((key: string) => {
        const abstractControl = group.controls[key];

        if (abstractControl instanceof FormGroup || abstractControl instanceof FormArray) {
            this.setAllControlBlank(abstractControl);
        } else {
            abstractControl.markAsDirty();
        }
    });
}
}
