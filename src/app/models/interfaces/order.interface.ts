import { ProductInterface } from "./product.interface";
import { UserInterface } from "./user.interface";
export interface OrderInterface {
  id: number;
  productOrder: ProductInterface;
  orderedTo: UserInterface;
  orderedBy: UserInterface;
  orderDate: Date;
  deliveryDate: Date;
  address: string;
  reciver?: string;
  // orderbyID(id: number) :product;
  // ordergetAll(): product[];
  // ordergetSearch(): product[];
  // orderUpdate(product:product):void;// Delivered, Cancel, Pending, Process
  // orderInsert(product:product):void;
  // orderDelete(id:number):void;
}
