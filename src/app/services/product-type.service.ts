import { Injectable } from '@angular/core';
import { ProductTypeInterface } from '../models/interfaces/product-type.interface';

@Injectable()
export class ProductTypeService {

  productType: ProductTypeInterface[] = [
    {id:1, productType:'Food'},
    {id:2, productType:'Drink'},
    {id:3, productType:'Car'},
    {id:4, productType:'Home Appliancies'},
    {id:5, productType:'Hardware'},
    {id:6, productType:'Tools'},
    {id:7, productType:'General Item'},
    {id:8, productType:'Bakery'},
    {id:9, productType:'Mobile'},
    {id:10, productType:'PC'},
    {id:11, productType:'Tablets'},
  ]
  constructor() { }
}
