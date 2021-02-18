import { IProductCategory } from "./product-category.interface";

export interface IProduct{
  id: number;
  productTitle:string;
  productType:IProductCategory[];
  stock:number;
  sale?:number;
  wholeSaleRate?:number;
  retailRate?:number;
  tex?:number;
  shipmentCharges?:number;
  description?:string;
  featured?:boolean;
  image?:any;
  userId:number;
}
