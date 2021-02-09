import { ProductService } from "src/app/services/product.service";
import { UserService } from "src/app/services/user.service";
export interface OrderInterface {
  id: number;
  productOrder: ProductService;
  quantity: number;
  amount: number;
  orderedTo: UserService;
  orderedBy: UserService;
  orderDate: string;
  deliveryDate: string;
  address: string;
  reciver?: string;
}
