import { Component, OnInit } from "@angular/core";
import { IUser } from "../../../models/interfaces/user.interface";
import { ProductService } from "../../../services/product.service";
import { UserService } from "../../../services/user.service";
import { IOrder } from "../../../models/interfaces/order.interface";
import { OrderService } from "../../../services/order.service";
import { IProduct } from "../../../models/interfaces/product.interface";

@Component({
  selector: "app-orders-n-review",
  templateUrl: "./orders-n-review.component.html",
  styleUrls: ["./orders-n-review.component.scss"],
})
export class OrdersNReviewComponent implements OnInit {
  public orders: IOrder[] = [];
  public users: IUser[] = [];
  public orderDisplayed: IOrder[] = [];
  public products: IProduct[] = [];
  public isError: boolean;
  public errMessage: string;
  public currentFilter: string = "ALL";
  constructor(private orderService: OrderService,
    private userService: UserService,
    private productService: ProductService) {}
  ngOnInit(): void {
    this.getOrdernReview();
    this.getProducts();
    this.getUsers();
  }
  getProducts() {
    this.productService.getproducts().subscribe(
      (products) => (this.products = products),
      (err) => {
        console.log(err);
        this.isError = true;
        this.errMessage = err;
      },
      () => {
        this.isError = false;
        this.errMessage = "Date Reterived Successfully";
      }
    );
  }
  getUsers() {
    this.userService.getUsers().subscribe(
      (users: IUser[]) => {
        this.users = users;
      },
      (err: any) => {
        this.isError = true;
        this.errMessage = "Can not Load data from User Service";
      },
      () => {
        this.isError = false;
        this.errMessage = "Date Reterived Successfully";
      }
    );
  }
  // Temporary Function will be Removed on Original Service
  getUserName(userID: number): string{
    return this.users.find(x => x.id === userID).name
  }
  getProductName(productID: number): string{
    return this.products.find(x => x.id === productID).productTitle
  }

  filterOrders(filter: string) {
    this.currentFilter = filter;
    if (this.orders === null || this.orders?.length < 1) {
      this.getOrdernReview();
    }
    if (filter === "ALL") {
      this.orderDisplayed = this.orders;
    } else {
      this.orderDisplayed = this.orders.filter((x) => x.orderStatus === filter);
    }
  }
  getClass(filter: string) {
    switch (filter) {
      case "ALL":
        return "ALL";
      case "CANCEL":
        return "icon-simple-remove";
      case "PENDING":
        return "icon-button-pause";
      case "URGENT":
        return "icon-watch-time";
      case "ONWAY":
        return "icon-user-run";
      case "COMPLETED":
        return "icon-check-2";
    }
  }
  getOrdernReview() {
    this.orderService.getorders().subscribe(
      (orders) => (this.orders = orders),
      (err) => {
        console.log(err);
        this.isError = true;
        this.errMessage = err;
      },
      () => {
        this.isError = false;
        this.errMessage = "Date Reterived Successfully";
        this.orderDisplayed =  this.orders;
      }
    );
  }
}
