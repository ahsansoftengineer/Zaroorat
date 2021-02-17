import { ProductCategoryInterface } from "./product-category.interface";

export interface ProductInterface{
  id: number;
  productTitle:string;
  productType:ProductCategoryInterface[];
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
