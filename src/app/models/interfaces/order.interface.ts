import { ProductInterface } from "./product.interface";
import { UserInterface } from "./user.interface";
export interface OrderInterface {
  id: number;
  productOrder: ProductInterface;
  quantity: number;
  amount: number;
  orderedTo: UserInterface;
  orderedBy: UserInterface;
  orderDate: string;
  deliveryDate: string;
  address: string;
  reciver?: string;
}
