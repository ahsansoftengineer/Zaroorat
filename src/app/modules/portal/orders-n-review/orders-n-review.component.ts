import { Component, OnInit } from "@angular/core";
import { ORDER_STATUS_ENUM } from "../../../models/enums/order-status.enums";
import { IOrder } from "../../../models/interfaces/order.interface";
import { OrderService } from "../../../services/order.service";

@Component({
  selector: "app-orders-n-review",
  templateUrl: "./orders-n-review.component.html",
  styleUrls: ["./orders-n-review.component.scss"],
})
export class OrdersNReviewComponent implements OnInit {
  public orders: IOrder[] = [];
  public currentORDER_STATUS_ENUM = ORDER_STATUS_ENUM.ALL;
  public oRDER_STATUS_ENUM = ORDER_STATUS_ENUM;
  public isError: boolean;
  public errMessage: string;
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.getOrdernReview();
  }
  filterOrders(filter: string) {
    if (this.orders === null || this.orders?.length < 1) {
      this.getOrdernReview();
    }
    this.currentORDER_STATUS_ENUM = filter;
    if (filter === this.oRDER_STATUS_ENUM.ALL) {
      this.orders = this.orders;
    } else {
      debugger
      this.orders = this.orders.filter((x) => x.orderStatus === filter.toString());
    }

    // console.log(this.ORDER_STATUS_ENUM.ALL == OrderStatusEnum.ALL)
  }
  getOrdernReview() {
    debugger;
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
      }
    );
    debugger;
  }
}
