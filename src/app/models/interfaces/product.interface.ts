import { ProductTypeInterface } from "./product-type.interface";

export interface ProductInterface{
  id: number;
  productTitle:string;
  productType:ProductTypeInterface[];
  stock:number;
  sale?:number;
  wholeSaleRate?:number;
  retailRate?:number;
  tex?:number;
  shipmentCharges?:number;
  description?:string;
  featured?:boolean;
  image?:any;
}
