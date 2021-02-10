import { Component, OnInit } from "@angular/core";
import { OrderInterface } from "../../../models/interfaces/order.interface";
import { OrderService } from "../../../services/order.service";

// const StatusIcons: { [characterName: string]: string} =
// {
//   Cancel: 'icon-simple-remove',
//   Pending: 'icon-button-pause',
//   Urgent: 'icon-watch-time',
//   OnWay: 'icon-user-run',
//   OrderStatus: 'icon-sound-wave',
// };

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
  getClassOrderStatus(status: string) {
    switch (status) {
      case "0":
        return "icon-simple-remove";
        break;
      case "1":
        return "icon-button-pause";
        break;
      case "2":
        return "icon-bell-55";
        break;
      case "3":
        return "icon-user-run";
        break;
      case "5":
        return "icon-sound-wave";
        break;
      case "4":
        return "icon-check-2";
        break;
      default:
        return "icon-check-2";
        break;
    }
  }
}
