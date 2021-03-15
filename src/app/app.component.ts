import { Component } from "@angular/core";
import { IUser } from "./models/interfaces/user.interface";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Zaroorat";
  user: IUser
  constructor(private userService: UserService){ }
  ngOnInit(): void {
    this.userService.getUser(1).subscribe(
      (user: IUser) => this.user = user,
      (err) => console.log(err),
      () => this.title = this.user.name
    )
  }
}
