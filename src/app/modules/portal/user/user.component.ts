import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../../../services/user.service";
import { CustomMethods } from "../../../shared/custom-method";
import { IUser } from "../../../models/interfaces/user.interface";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from "@angular/router";
// import { form } from 'src/app/forms/user-form';

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
})
export class UserComponent implements OnInit {
  form: FormGroup;
  user: IUser;
  imageBanner: string = CustomMethods.userBanner;
  imageUser: string = CustomMethods.userPath
  // For Image
  userImage: string ;
  bannerImage: string ;
  userFileName: string ;
  bannerFileName: string ;
  errMessage: string ;
  isError: boolean ;

  // form: FormGroup;
  // formService: form;
  // user: UserInterface;
  // state: UserAuthState;
  constructor(
    private userService: UserService,
    private modalService: NgbModal,
    private _route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.resettingImage()
    this.initializingForm();
    if(this._route.snapshot.params['id']){
      const id = +this._route.snapshot.params['id']
      this.form.value.id = id;
      this.getuser();
    }
  }
  initializingForm() {
    this.form = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", Validators.required),
      userName: new FormControl("", Validators.required),
      businessName: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required), // Dynamically View
      gender: new FormControl("0", Validators.required),
      email: new FormControl("", Validators.required),
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
      background: new FormControl("0"),
      sidebar: new FormControl("0"),
    });
  }
  resettingImage(){
    this.userImage = this.imageUser + "User7.PNG";
    this.bannerImage = this.imageBanner + "BlueBlue.jpg";
    this.userFileName = "User7.PNG";
    this.bannerFileName = "BlueBlue.jpg";
    this.errMessage = "no errors";
    this.isError = false;
  }
  getuser() {
    const id = this.form.value.id;
    this.userService.getUser(id).subscribe(
      (user: IUser) => {
        this.mapModelValuesToForm(user);
        this.user = user;
        this.userFileName = user.userImage;
        this.bannerFileName = user.userBanner;
      },
      (err: any) => {
        console.log(err);
        this.resettingImage();
        this.isError = true;
        this.errMessage = "Unable to display result of ID " + id;
        // In case error set all controls blank
        this.initializingForm();
      },
      () => {
        this.isError = false;
        this.errMessage = "Showing Result of ID " + id;
      }
    );
  }
  fileName_File(event: { name: string; file: string }, imageNumber: number) {
    if (imageNumber === 1) {
      this.userImage = event.file;
      this.form.patchValue({
        userImage: event.name,
      });
    } else {
      this.bannerImage = event.file;
      this.form.patchValue({
        userBanner: event.name,
      });
    }
  }
  insert() {
    this.mapFormValuesToModel();
    this.user.id = null;
    this.userService.addUser(this.user).subscribe(
      () => {
        this.errMessage =
          this.user.name +
          " as User Type " +
          this.user.userType +
          " with Status " +
          this.user.userStatus +
          " has Created";
        this.isError = false;
      },
      (err) => {
        console.log(err);
        this.errMessage =
          this.user.name +
          " as User Type " +
          this.user.userType +
          " with Status " +
          this.user.userStatus +
          " not Created";
        this.isError = true;
      }
    );
  }
  update() {
    this.mapFormValuesToModel();
    this.userService.updateUser(this.user).subscribe(
      () => {
        this.errMessage =
          this.user.name +
          " as User Type " +
          this.user.userType +
          " with Status " +
          this.user.userStatus +
          " has Updated";
        this.isError = false;
      },
      (err) => {
        console.log(err);
        this.errMessage =
          this.user.name +
          " as User Type " +
          this.user.userType +
          " with Status " +
          this.user.userStatus +
          " not Updated";
        this.isError = true;
      }
    );
  }
  delete() {
    this.mapFormValuesToModel();
    this.userService.deleteUser(this.user.id).subscribe(
      () => {
        this.errMessage =
          this.user.name +
          " as User Type " +
          this.user.userType +
          " with Status " +
          this.user.userStatus +
          " has Deleted ";
        this.isError = false;
      },
      (err) => {
        console.log(err);
        this.errMessage =
          this.user.name +
          " as User Type " +
          this.user.userType +
          " with Status " +
          this.user.userStatus +
          " not Deleted";
        this.isError = true;
      }
    );
  }
  mapModelValuesToForm(user: IUser) {
    this.form.patchValue({
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
    this.form.markAsDirty();
    this.form.markAsTouched();
  }
  mapFormValuesToModel() {
    this.user = {
      id: this.form.value?.id,
      name: this.form.value?.name,
      userName: this.form.value?.userName,
      businessName: this.form.value?.businessName,
      password: this.form.value?.password,
      gender: this.form.value?.gender,
      email: this.form.value?.email,
      contact: this.form.value?.contact,
      nTNNumber: this.form.value?.nTNNumber,
      userType: this.form.value?.userType,
      userStatus: this.form.value?.userStatus,
      online: this.form.value?.online,
      userImage: this.form.value?.userImage,
      userBanner: this.form.value?.userBanner,
      complain: this.form.value?.complain,
      address: this.form.value?.address,
      city: this.form.value?.city,
      postal: this.form.value?.postal,
      background: this.form.value?.background,
      sidebar: this.form.value?.sidebar,
    };
  }
  open(modal, size:string = 'sm') {
    if(size === 'sm'){
      this.modalService.open(modal);
    }
    else if(size === 'lg'){
      this.modalService.open(modal, { size: 'lg' });
    }
    else if(size === 'xl'){
      this.modalService.open(modal, { size: 'xl' });
    }
  }
}
