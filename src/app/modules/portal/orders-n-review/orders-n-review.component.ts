import { Component, OnInit } from "@angular/core";
import { OrderInterface } from "src/app/models/interfaces/order.interface";
import { OrderService } from "src/app/services/order.service";

@Component({
  selector: "app-orders-n-review",
  templateUrl: "./orders-n-review.component.html",
  styleUrls: ["./orders-n-review.component.scss"],
})
export class OrdersNReviewComponent implements OnInit {
  public orders: OrderInterface[] = [];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orders = this.orderService.orders;
  }
}
