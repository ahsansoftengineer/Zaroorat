import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {}

export const ROUTES: RouteInfo[] = [];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  currentUser: string = "";
  constructor() {}

  ngOnInit() {
    this.currentUser = "admin";
    // this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  switchinguser() {
    this.currentUser == "admin"
      ? (this.currentUser = "vendor")
      : (this.currentUser = "admin");
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
