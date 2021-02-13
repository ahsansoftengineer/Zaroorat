import { ProductInterface } from "./product.interface";
import { UserInterface } from "./user.interface";
import { OrderStatusEnum } from '../enums/order-status.enums'
export interface OrderInterface {
  id: number;
  productOrder: ProductInterface;
  quantity: number;
  amount: number;
  orderStatus: OrderStatusEnum;
  orderedTo: UserInterface;
  orderedBy: UserInterface;
  orderDate: string;
  deliveryDate: string;
  address: string;
  reciver?: string;
}
