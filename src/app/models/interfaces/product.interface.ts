import { ProductTypeService } from "src/app/services/product-type.service";

export interface ProductInterface{
  id: number;
  productTitle:string;
  productType:ProductTypeService[];
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
