import { Component, OnInit } from "@angular/core";
import { ProductInterface } from "src/app/models/interfaces/product.interface";
import { ProductService } from "src/app/services/product.service";
import { OrderInterface } from "../../../models/interfaces/order.interface";
import { OrderService } from "../../../services/order.service";

@Component({
  selector: "app-orders-n-review",
  templateUrl: "./orders-n-review.component.html",
  styleUrls: ["./orders-n-review.component.scss"],
})
export class OrdersNReviewComponent implements OnInit {
  public orders: OrderInterface[];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.orders;
  }
}
