import { Component, OnInit } from "@angular/core";
import { IUser } from "../models/interfaces/user.interface";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"],
})
export class LayoutComponent implements OnInit {
  public sidebarColor: string = "red";
  public chatBotHide: boolean = false;
  public meUser: IUser;
  myContactedUser: IUser;
  public chatBotLayout(chatHide: boolean) {
    this.chatBotHide = chatHide;
  }
  constructor(private user: UserService) {
    this.meUser = this.user.users[0];
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
