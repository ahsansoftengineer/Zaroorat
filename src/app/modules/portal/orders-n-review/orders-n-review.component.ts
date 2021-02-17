import { Component, OnInit } from "@angular/core";
import { ORDER_STATUS_ENUM } from "../../../models/enums/order-status.enums";
import { OrderInterface } from "../../../models/interfaces/order.interface";
import { OrderService } from "../../../services/order.service";

@Component({
  selector: "app-orders-n-review",
  templateUrl: "./orders-n-review.component.html",
  styleUrls: ["./orders-n-review.component.scss"],
})
export class OrdersNReviewComponent implements OnInit {
  public orders: OrderInterface[];
  public currentORDER_STATUS_ENUM = ORDER_STATUS_ENUM.ALL;
  public oRDER_STATUS_ENUM = ORDER_STATUS_ENUM;
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    if(this.orders == null){
      this.orders = this.orderService.orders;
    }
  }
  filterOrders(filter: string) {
    if (filter === this.oRDER_STATUS_ENUM.ALL) {
      this.orders = this.orderService.orders;
    } else {
      this.orders = this.orderService.orders.filter(
        (x) => x.orderStatus === filter
      );
    }

    this.currentORDER_STATUS_ENUM = filter;
    // console.log(this.ORDER_STATUS_ENUM.ALL == OrderStatusEnum.ALL)
  }
}
