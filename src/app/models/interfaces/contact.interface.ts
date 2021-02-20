import { IProduct } from "./product.interface";
import { IUser } from "./user.interface";

export interface IContact {
  id:number;
  currentUser: IUser
  contacts:IUser[];
}
