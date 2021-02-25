import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
// import { UserForm } from 'src/app/forms/user-form';
// import { UserInterface } from 'src/app/models/interfaces/user.interface';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit, OnDestroy {
  // form: FormGroup;
  // formService: UserForm;
  // user: UserInterface;
  // state: UserAuthState;
  defaultImagePath: string = "../../../../assets/img/Select Image.png";
  image: string = this.defaultImagePath;
  imagetitle: string = this.defaultImagePath
  selectedUserImage: string = "Select User Image";
  selectedUserTitleImage: string = "Select User Business Title Image";
  user: FormGroup = new FormGroup({});
  constructor() {}
  ngOnDestroy(): void {}
  ngOnInit(): void {
    this.user = new FormGroup({
      id: new FormControl("", Validators.minLength(3)),
      fullName: new FormControl("", Validators.minLength(3)),
      userName: new FormControl("", Validators.minLength(3)),
      businessName: new FormControl("", Validators.minLength(3)),
      password: new FormControl("", Validators.minLength(3)),
      gender: new FormControl("Select Gender", Validators.required),
      email: new FormControl("", Validators.minLength(3)),
      contact: new FormControl("", Validators.minLength(3)),
      nTNNumber: new FormControl("", Validators.minLength(3)),
      userType: new FormControl("Select Type", Validators.minLength(3)),
      userStatus: new FormControl("Select Status", Validators.minLength(3)),
      image: new FormControl("", Validators.minLength(3)),
      imagetitle: new FormControl("", Validators.minLength(3)),
      complain: new FormControl("", Validators.minLength(3)),
      address: new FormControl("", Validators.minLength(3)),
      city: new FormControl("", Validators.minLength(3)),
      postal: new FormControl("", Validators.minLength(3)),
      background: new FormControl("Select Background Theme"),
      sidebar: new FormControl("Select Sidebar Theme"),
    });
  }
  updateUser() {
    console.log(this.user.value);
  }
  onFileChange(event, activeControl: string): any {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      let fileName: string = event.target.files[0].name;
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (activeControl === "imagetitle") {
          this.imagetitle = reader.result as string;
          document.getElementById("userTitleFileName").innerHTML = fileName;
          // this.product.patchValue({
          //   galleryImageSrc: reader.result,
          // });
        } else if (activeControl === "image") {
          this.image = reader.result as string;
          document.getElementById("userFileName").innerHTML = fileName;
        }
      };
    } else {
      if (activeControl === "image") {
        document.getElementById("userFileName").innerHTML =
          "Please Select User Image";
        this.image = this.defaultImagePath;
      } else if (activeControl === "imagetitle") {
        document.getElementById("userTitleFileName").innerHTML =
          "Please Select Image";
        this.imagetitle = this.defaultImagePath;
      }
    }
  }
}
