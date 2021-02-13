import { Component, OnInit } from "@angular/core";
import { OrderStatusEnum } from "../../../models/enums/order-status.enums";
import { OrderInterface } from "../../../models/interfaces/order.interface";
import { OrderService } from "../../../services/order.service";

@Component({
  selector: "app-orders-n-review",
  templateUrl: "./orders-n-review.component.html",
  styleUrls: ["./orders-n-review.component.scss"],
})
export class OrdersNReviewComponent implements OnInit {
  public orders: OrderInterface[];
  public orderStatus: OrderStatusEnum;
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.orders = this.orderService.orders;
  }
  getEnum(status: string): string {
    return this.orderStatus[status];
  }
}
