import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../services/user.service";
import { UserInterface } from "../../../models/interfaces/user.interface";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"],
})
export class UserListComponent implements OnInit {
  public users: UserInterface[];
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.users = this.userService.users
  }
}
