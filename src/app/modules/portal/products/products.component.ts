import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { CustomMethods } from "../../../shared/custom-method";
import { IProduct } from "../../../models/interfaces/product.interface";
import { ProductService } from "../../../services/product.service";
import { IProductCategory } from "../../../models/interfaces/product-category.interface";
import { TreeviewItem } from "ngx-treeview";
import { ProductCategoryService } from "../../../services/product-category.service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  productForm: FormGroup = new FormGroup({});
  // products: IProduct[];
  product: IProduct;
  // For Image
  defaultPath: string = "../../../../assets/img/";
  productImage: string = this.defaultPath + "upload.png";
  galleryImage: string = this.defaultPath + "upload.png";
  selectedFileName: string = "File Name";
  currentFileToDisplay: string = "Product";
  productCategoryTreeView: TreeviewItem[] = [];
  productCategories: IProductCategory[];
  selectedResult: string = 'none';
  list1: number = 0;
  list2: number = 0;
  list3: number = 0;
  list4: number = 0;

  errMessage: string = "error Message to Display";
  isError: boolean = false;

  constructor(
    public productService: ProductService,
    public productCategoryService: ProductCategoryService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.productForm = new FormGroup({
      id: new FormControl("", Validators.required),
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
      productImage: new FormControl(this.productImage, Validators.required),
      galleryImage: new FormControl(this.galleryImage, Validators.required),
      featured: new FormControl(false, Validators.required),
      userId: new FormControl("", Validators.required),
      description: new FormControl(""),
    });
    this.refereshProductCategory();
  }
  onFileChange(event, activeControl: string) {
    const reader = new FileReader();
    this.currentFileToDisplay = activeControl;
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      let fileName: string = event.target.files[0].name;
      reader.readAsDataURL(file);
      debugger;
      reader.onload = () => {
        if (activeControl === "Gallery") {
          this.productForm.value.galleryImage = reader.result as string;
          document.getElementById("galleryFileName").innerHTML = fileName;
          // this.product.patchValue({
          //   galleryImageSrc: reader.result,
          // });
        } else if (activeControl === "Product") {
          this.productForm.value.productImage = reader.result as string;
          document.getElementById("productFileName").innerHTML = fileName;
        }
      };
    } else {
      if (activeControl === "Gallery") {
        document.getElementById("galleryFileName").innerHTML =
          "Please Select Image";
        this.product.galleryImage = this.defaultPath + "upload.png";
      } else if (activeControl === "Product") {
        document.getElementById("productFileName").innerHTML =
          "Please Select Image";
        this.product.productImage = this.defaultPath + "upload.png";
      }
    }
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
  getProduct() {
    const id: number = this.productForm.value.id;
    this.productService.getproduct(id).subscribe(
      (product: IProduct) => {
        this.mapModelValuesToForm(product);
        this.product = product;
        this.setImageLabelOrImageSrc("get");
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "Unable to display result of ID " + id;
        // In case error set all controls blank
        this.productForm = CustomMethods.setAllControlBlank(this.productForm);
        this.setImageLabelOrImageSrc("err");
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
  productCategoryItemClick(id: number,text:string, level: number) {
    this.selectedResult =  id + ' = ' + text
    this.productForm.patchValue({
      productTypeId: this.selectedResult
    });
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

    this.productForm.markAsDirty();
    this.productForm.markAsTouched();
  }
  mapFormValuesToModel() {
    this.product.id = this.productForm.value.id;
    this.product.productTitle = this.productForm.value.productTitle;
    this.product.productTypeId = this.productForm.value.productTypeId;
    this.product.stock = this.productForm.value.stock;
    this.product.sale = this.productForm.value.sale;
    this.product.wholeSaleRate = this.productForm.value.wholeSaleRate;
    this.product.retailRate = this.productForm.value.retailRate;
    this.product.tex = this.productForm.value.tex;
    this.product.shipmentCharges = this.productForm.value.shipmentCharges;
    this.product.productImage = this.productForm.value.productImage;
    this.product.galleryImage = this.productForm.value.galleryImage;
    this.product.featured = this.productForm.value.featured;
    this.product.userId = this.productForm.value.userId;
    this.product.description = this.productForm.value.description;
  }
  setImageLabelOrImageSrc(action: string) {
    if (action == "get" && this.product) {
      document.getElementById(
        "galleryFileName"
      ).innerHTML = this.product.galleryImage;
      document.getElementById(
        "productFileName"
      ).innerHTML = this.product.productImage;
      this.productImage = this.defaultPath + this.product.productImage;
      this.galleryImage = this.defaultPath + this.product.galleryImage;
      this.productForm.value.productImage = this.productImage;
      this.productForm.value.galleryImage = this.galleryImage;
    } else if (action == "err") {
      document.getElementById("galleryFileName").innerHTML = "Choose File";
      document.getElementById("productFileName").innerHTML = "Choose File";
      this.productImage = this.defaultPath + "upload.png";
      this.galleryImage = this.defaultPath + "upload.png";
      this.productForm.value.productImage = this.productImage;
      this.productForm.value.galleryImage = this.galleryImage;
    } else {
    }
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
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
}
