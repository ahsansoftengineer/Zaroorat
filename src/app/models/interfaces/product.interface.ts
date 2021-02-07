import { productCategory } from "./product-category.interface";

export interface product{
  id: number;
  productTitle:string;
  productCategory:productCategory[];
  stock:number;
  sale?:number;
  wholeSaleRate?:number;
  retailRate:number;
  tex?:number;
  shipmentCharges?:number;
  description?:string;
  featured:boolean;
  image:any;
  // productbyID(id: number) :product;
  // productgetAll(): product[];
  // productgetSearch(): product[];
  // productUpdate(product:product):void;
  // productInsert(product:product):void;
  // productDelete(id:number):void;
}
