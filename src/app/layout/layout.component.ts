import { Component, OnInit } from "@angular/core";
import { IUser } from "../models/interfaces/user.interface";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  public sidebarColor: string = "green";
  public chatBotHide: boolean = false;
  public user: IUser;
  myContactedUser: IUser;
  public chatBotLayout(chatHide: boolean) {
    this.chatBotHide = chatHide;
  }
  public errMessage: string = 'no error';
  public isError: boolean = false;
  constructor(private userService: UserService) {
    this.getuser(1);
  }
  getuser(id: number = 1) {
    this.userService.getUser(id).subscribe(
      (user: IUser) => {
        this.user = user;
      },
      (err: any) => {
        console.log(err);
        this.errMessage = "Unable to display result of ID " + id;
      },
      () => {
        this.isError = false;
        this.errMessage = "Showing Result of ID " + id;
      }
    );
  }
  changeSidebarColor(color) {
    var sidebar = document.getElementsByClassName("sidebar")[0];
    var mainPanel = document.getElementsByClassName("main-panel")[0];

    this.sidebarColor = color;

    if (sidebar != undefined) {
      sidebar.setAttribute("data", color);
    }
    if (mainPanel != undefined) {
      mainPanel.setAttribute("data", color);
    }
  }
  changeDashboardColor(color) {
    var body = document.getElementsByTagName("body")[0];
    if (body && color === "white-content") {
      body.classList.add(color);
    } else if (body.classList.contains("white-content")) {
      body.classList.remove("white-content");
    }
  }

  letsChat(myContactedUser: IUser) {
    this.myContactedUser = myContactedUser;
  }
  ngOnInit() {

  }
}
