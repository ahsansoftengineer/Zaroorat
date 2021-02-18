import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent implements OnInit {
  product: FormGroup = new FormGroup({});
  defaultImagePath: string = "../../../../assets/img/Select Image.png";
  imgGallery: string = this.defaultImagePath;
  imgProduct: string = this.defaultImagePath;
  selectedFileName: string = "File Name";
  currentFileToDisplay: string = "productImage";
  constructor() {}
  ngOnInit(): void {
    this.product = new FormGroup({
      id: new FormControl(""),
      productTitle: new FormControl("", Validators.minLength(3)),
      category: new FormControl("", Validators.minLength(3)),
      stock: new FormControl("", Validators.required),
      sale: new FormControl("", Validators.required),
      wholeSaleRate: new FormControl("", Validators.required),
      retailRate: new FormControl("", Validators.required),
      tex: new FormControl("", Validators.required),
      shipmentCharges: new FormControl("", Validators.required),
      productImage: new FormControl("", Validators.minLength(3)),
      galleryImage: new FormControl("", Validators.required),
      featured: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    });
  }
  updateProduct() {
    console.log(this.product.value);
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
}
