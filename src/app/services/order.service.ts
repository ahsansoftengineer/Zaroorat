import { Injectable } from "@angular/core";
import { ORDER_STATUS_ENUM } from "../models/enums/order-status.enums";
import { IOrder } from "../models/interfaces/order.interface";
import { ProductService } from "./product.service";
import { UserService } from "./user.service";

@Injectable()
export class OrderService implements IOrder {
  public id: number;
  public productOrder: number;
  public orderStatus: string;
  public quantity: number;
  public amount: number;
  public orderedTo: number; // IUser
  public orderedBy: number; // IUser
  public orderDate: string;
  public deliveryDate: string;
  public address: string;
  public reciver?: string;
  constructor() {}
}
