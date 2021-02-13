import { Injectable } from "@angular/core";
import { OrderStatusEnum } from "../models/enums/order-status.enums";
import { OrderInterface } from "../models/interfaces/order.interface";
import { ProductService } from "./product.service";
import { UserService } from "./user.service";

@Injectable()
export class OrderService implements OrderInterface {
  public userService?: UserService = new UserService();
  public productService?: ProductService = new ProductService();

  public id: number;
  public productOrder: ProductService;
  public orderStatus: OrderStatusEnum;
  public quantity: number;
  public amount: number;
  public orderedTo: UserService;
  public orderedBy: UserService;
  public orderDate: string;
  public deliveryDate: string;
  public address: string;
  public reciver?: string;
  constructor() {}
  public orders?: OrderInterface[] = [
    {
      id: 1001,
      productOrder: this.productService.products[0],
      orderStatus: OrderStatusEnum.Cancel,
      amount: 100,
      quantity: 50,
      orderedTo: this.userService.users[0],
      orderedBy: this.userService.users[1],
      orderDate: "01-01-2021",
      deliveryDate: "02-01-2021",
      address: "House No L-799 Sector 34/2 Korangi 3 Karachi",
      reciver: "Brother Asim",
    },
    {
      id: 1002,
      productOrder: this.productService.products[1],
      orderStatus: OrderStatusEnum.Pending,
      amount: 90,
      quantity: 40,
      orderedTo: this.userService.users[1],
      orderedBy: this.userService.users[2],
      orderDate: "02-01-2021",
      deliveryDate: "03-01-2021",
      address: "Pakistan",
      reciver: "Sister",
    },
    {
      id: 1003,
      productOrder: this.productService.products[2],
      orderStatus: OrderStatusEnum.Urgent,
      amount: 200,
      quantity: 10,
      orderedTo: this.userService.users[2],
      orderedBy: this.userService.users[3],
      orderDate: "04-01-2021",
      deliveryDate: "05-02-2021",
      address: "Kalabagh",
      reciver: "Self",
    },
    {
      id: 1004,
      productOrder: this.productService.products[4],
      orderStatus: OrderStatusEnum.OnWay,
      amount: 300,
      quantity: 1000,
      orderedTo: this.userService.users[4],
      orderedBy: this.userService.users[3],
      orderDate: "05-02-2021",
      deliveryDate: "08-02-2021",
      address: "Sadar Karachi",
      reciver: "Self",
    },
    {
      id: 1005,
      productOrder: this.productService.products[5],
      orderStatus: OrderStatusEnum.Complete,
      amount: 10,
      quantity: 10000,
      orderedTo: this.userService.users[1],
      orderedBy: this.userService.users[2],
      orderDate: "01-01-2021",
      deliveryDate: "02-01-2021",
      address: "Korangi Creek",
      reciver: "Uncle Furqan",
    },
    {
      id: 1006,
      productOrder: this.productService.products[6],
      orderStatus: OrderStatusEnum.Pending,
      amount: 150,
      quantity: 200,
      orderedTo: this.userService.users[0],
      orderedBy: this.userService.users[1],
      orderDate: "09-01-2021",
      deliveryDate: "12-01-2021",
      address: "Landhi 36/B",
      reciver: "Self",
    },
    {
      id: 1007,
      productOrder: this.productService.products[7],
      orderStatus: OrderStatusEnum.Cancel,
      amount: 5,
      quantity: 10,
      orderedTo: this.userService.users[1],
      orderedBy: this.userService.users[0],
      orderDate: "02-02-2021",
      deliveryDate: "04-02-2021",
      address: "Malir Cant",
      reciver: "Nephew Adnan",
    },
    {
      id: 1008,
      productOrder: this.productService.products[2],
      orderStatus: OrderStatusEnum.Urgent,
      amount: 10,
      quantity: 15000,
      orderedTo: this.userService.users[1],
      orderedBy: this.userService.users[2],
      orderDate: "19-01-2021",
      deliveryDate: "21-01-2021",
      address: "Shah Faisal Town",
      reciver: "Self",
    },
    {
      id: 1009,
      productOrder: this.productService.products[5],
      orderStatus: OrderStatusEnum.OnWay,
      amount: 100,
      quantity: 50,
      orderedTo: this.userService.users[0],
      orderedBy: this.userService.users[1],
      orderDate: "01-01-2021",
      deliveryDate: "02-01-2021",
      address: "Ibrahim Haidre Goth",
      reciver: "Faisal Town",
    },
    {
      id: 1010,
      productOrder: this.productService.products[8],
      orderStatus: OrderStatusEnum.Complete,
      amount: 100,
      quantity: 50,
      orderedTo: this.userService.users[2],
      orderedBy: this.userService.users[4],
      orderDate: "29-01-2020",
      deliveryDate: "15-02-2020",
      address: "Gulshan",
      reciver: "Self",
    },
  ];
}
