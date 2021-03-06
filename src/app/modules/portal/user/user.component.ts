import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../services/user.service";
import { CustomMethods } from "../../../shared/custom-method";
import { IUser } from "../../../models/interfaces/user.interface";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
// import { UserForm } from 'src/app/forms/user-form';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  userForm: FormGroup;
  user: IUser;
  defaultPath: string = "../../../../assets/img/";
  // For Image
  userImage: string = this.defaultPath + "User/" + "upload.png";
  bannerImage: string = this.defaultPath + "Banner/" + "upload.png";
  userFileName: string = "upload.png";
  bannerFileName: string = "upload.png";
  errMessage: string = "no errors";
  isError: boolean = false;

  // form: FormGroup;
  // formService: UserForm;
  // user: UserInterface;
  // state: UserAuthState;
  constructor(
    private userService: UserService,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.userForm = new FormGroup({
      id: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      userName: new FormControl("", Validators.required),
      businessName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required), // Dynamically View
      gender: new FormControl("0", Validators.required),
      email: new FormControl("abc@domain.com", Validators.required),
      contact: new FormControl("", Validators.required),
      nTNNumber: new FormControl("", Validators.required),
      userType: new FormControl("0", Validators.required),
      userStatus: new FormControl("0", Validators.required),
      online: new FormControl("", Validators.required), // Design
      userImage: new FormControl("", Validators.required),
      userBanner: new FormControl("", Validators.required),
      complain: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required),
      postal: new FormControl("", Validators.required),
      background: new FormControl(
        "Select Background Theme",
        Validators.required
      ),
      sidebar: new FormControl("Select Sidebar Theme", Validators.required),
    });
  }
  getuser() {
    const id = this.userForm.value.id;
    this.userService.getUser(id).subscribe(
      (user: IUser) => {
        this.mapModelValuesToForm(user);
        this.user = user;
        this.userFileName = user.userImage;
        this.bannerFileName = user.userBanner;
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "Unable to display result of ID " + id;
        // In case error set all controls blank
        this.userForm.value.gender = "0";
        this.userForm.value.userType = "0";
        this.userForm.value.userStatus = "0";
        this.userForm.value.userImage = "upload.png";
        this.userForm.value.userBanner = "upload.png";
        this.userFileName = "upload.png";
        this.bannerFileName = "upload.png";
        this.userForm = CustomMethods.setAllControlBlank(this.userForm);
      },
      () => {
        this.isError = false;
        this.errMessage = "Showing Result of ID " + id;
      }
    );
  }
  insert() {
    this.mapFormValuesToModel();
    this.user.id = null;
    this.userService.addUser(this.user).subscribe(
      () => {
        this.errMessage =
          this.user.userName + " as User Type " + this.user.userType;
        " with Status " + this.user.userStatus + " has Created";
        this.isError = false;
      },
      (err) => {
        console.log(err);
        this.errMessage =
          this.user.userName + " as User Type " + this.user.userType;
        " with Status " + this.user.userStatus + " not Created";
        this.isError = true;
      }
    );
  }
  update() {
    this.mapFormValuesToModel();
    this.userService.updateUser(this.user).subscribe(
      () => {
        this.errMessage =
          this.user.userName + " as User Type " + this.user.userType;
        " with Status " + this.user.userStatus + " has Updated";
        this.isError = false;
      },
      (err) => {
        console.log(err);
        this.errMessage =
          this.user.userName + " as User Type " + this.user.userType;
        " with Status " + this.user.userStatus + " not Updated";
        this.isError = true;
      }
    );
  }
  delete() {
    this.mapFormValuesToModel();
    this.userService.deleteUser(this.user.id).subscribe(
      () => {
        this.errMessage =
          this.user.userName + " as User Type " + this.user.userType;
        " with Status " + this.user.userStatus + " has Deleted ";
        this.isError = false;
      },
      (err) => {
        console.log(err);
        this.errMessage =
          this.user.userName + " as User Type " + this.user.userType;
        " with Status " + this.user.userStatus + " not Deleted";
        this.isError = true;
      }
    );
  }
  mapModelValuesToForm(user: IUser) {
    this.userForm.patchValue({
      id: user.id,
      name: user.name,
      userName: user.userName,
      businessName: user.businessName,
      password: user.password,
      gender: user.gender,
      email: user.email,
      contact: user.contact,
      nTNNumber: user.nTNNumber,
      userType: user.userType,
      userStatus: user.userStatus,
      online: user.online,
      userImage: user.userImage,
      userBanner: user.userBanner,
      complain: user.complain,
      address: user.address,
      city: user.city,
      postal: user.postal,
      background: user.background,
      sidebar: user.sidebar,
    });
    this.userForm.markAsDirty();
    this.userForm.markAsTouched();
  }
  mapFormValuesToModel() {
    this.user = {
      id: this.userForm.value?.id,
      name: this.userForm.value?.name,
      userName: this.userForm.value?.userName,
      businessName: this.userForm.value?.businessName,
      password: this.userForm.value?.password,
      gender: this.userForm.value?.gender,
      email: this.userForm.value?.email,
      contact: this.userForm.value?.contact,
      nTNNumber: this.userForm.value?.nTNNumber,
      userType: this.userForm.value?.userType,
      userStatus: this.userForm.value?.userStatus,
      online: this.userForm.value?.online,
      userImage: this.userForm.value?.userImage,
      userBanner: this.userForm.value?.userBanner,
      complain: this.userForm.value?.complain,
      address: this.userForm.value?.address,
      city: this.userForm.value?.city,
      postal: this.userForm.value?.postal,
      background: this.userForm.value?.background,
      sidebar: this.userForm.value?.sidebar,
    };
  }
  open(modal) {
    this.modalService.open(modal);
  }
}
