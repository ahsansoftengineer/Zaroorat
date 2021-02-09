import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  // path: string;
  // title: string;
  // icon: string;
  // class: string;
}

export const ROUTES: RouteInfo[] = [
  // {
  //   path: "/portal/products/dashboard",
  //   title: "Dashboard",
  //   icon: "icon-molecule-40",
  //   class: "",
  // },
  // {
  //   path: "/portal/products/add",
  //   title: "Add Product",
  //   icon: "icon-chart-pie-36",
  //   class: "active",
  // },
  // {
  //   path: "/portal/products/list",
  //   title: "List Product",
  //   icon: "icon-molecule-40",
  //   class: "",
  // },
  // {
  //   path: "/portal/products/orders-&-review",
  //   title: "Orders & Review",
  //   icon: "icon-paper",
  //   class: "",
  // },
  // {
  //   path: "/portal/notifications",
  //   title: "Notifications",
  //   icon: "icon-bell-55",
  //   class: "",
  // },

  // {
  //   path: "/portal/user/preferences",
  //   title: "User Profile",
  //   icon: "icon-single-02",
  //   class: "",
  // },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  currentUser:string = ''
  constructor() {}

  ngOnInit() {
    this.currentUser = 'admin';
    // this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  switchinguser(){
    this.currentUser == 'admin'? this.currentUser = 'vendor': this.currentUser = 'admin';
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
