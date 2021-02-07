import { product } from "./product.interface";
import { user } from "./user.interface";
export interface order {
  id: number;
  productOrder: product;
  orderedTo: user;
  orderedBy: user;
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
