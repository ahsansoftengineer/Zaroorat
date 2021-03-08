import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";
import { IUser } from "../../../models/interfaces/user.interface";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  public users: IUser[];
  defaultPath: string = "../../../../assets/img/";
  errMessage: string = "no error";
  isError: boolean = false;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
   this.getUsers()
  }
  getUsers() {
    this.userService.getUsers().subscribe(
      (users) => this.users = users,
      (err) => {
        console.log(err)
        this.errMessage = 'Unable to Display Users problem with the Service'
        this.isError = true;
      },
      () => {
        this.errMessage = "User data Reterived Successfully"
        this.isError = false;
      }
    )
  }
}
