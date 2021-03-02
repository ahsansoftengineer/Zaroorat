import { IProductCategory } from "./product-category.interface";

export interface IProduct{
  id: number;
  productTitle:string;
  productTypeId:number;
  stock:number;
  sale?:number;
  wholeSaleRate?:number;
  retailRate?:number;
  tex?:number;
  shipmentCharges?:number;
  description?:string;
  featured?:boolean;
  productImage?:string;
  galleryImage?:string;
  userId:number;
}
