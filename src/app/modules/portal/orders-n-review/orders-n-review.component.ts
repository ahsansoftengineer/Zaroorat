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
  public orderStatus = OrderStatusEnum.All;
  public orderStatusEnum = OrderStatusEnum;
  public currentFilter: string = "all";
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.orders = this.orderService.orders;
  }
  getEnum(status: string): string {
    console.log(status);
    console.log(this.orderStatus[status]);
    return this.orderStatus[status];
  }
  filterOrders(filter: OrderStatusEnum) {
    // this.currentFilter = filter;
    if (filter === this.orderStatusEnum.All) {
      this.orders = this.orderService.orders;
    } else {
      this.orders = this.orderService.orders.filter(
        (x) => x.orderStatus.valueOf() === filter.valueOf()
      );
    }
    console.log(filter);
    // console.log(this.ORDER_STATUS_ENUM.ALL == OrderStatusEnum.ALL)
  }
}
