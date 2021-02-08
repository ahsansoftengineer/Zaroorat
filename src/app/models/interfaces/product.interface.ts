import { ProductTypeInterface } from "./product-type.interface";

export interface ProductInterface{
  id: number;
  productTitle:string;
  productCategory:ProductTypeInterface[];
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
