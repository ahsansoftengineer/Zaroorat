import { ProductInterface } from "./product.interface";
import { UserInterface } from "./user.interface";
import { ORDER_STATUS_ENUM } from '../enums/order-status.enums'
export interface OrderInterface {
  id: number;
  productOrder: ProductInterface;
  quantity: number;
  amount: number;
  orderStatus: string;
  orderedTo: UserInterface;
  orderedBy: UserInterface;
  orderDate: string;
  deliveryDate: string;
  address: string;
  reciver?: string;
}
