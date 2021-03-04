import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { IProductCategory } from "../models/interfaces/product-category.interface";
import { IProduct } from "../models/interfaces/product.interface";
import { CustomMethods } from "../shared/custom-method";

@Injectable()
export class ProductService implements IProduct {
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
  baseUrl = "http://localhost:3000/Product";
  constructor(private httpClient: HttpClient) {

  }
  // Get All product
  getproducts(): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>(this.baseUrl)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Return Single product
  getproduct(id: number): Observable<IProduct> {
    return this.httpClient
      .get<IProduct>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Add New product
  addproduct(product: IProduct): Observable<IProduct> {
    return this.httpClient
      .post<IProduct>(this.baseUrl, product, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Update 1 product
  updateproduct(product: IProduct): Observable<void> {
    return this.httpClient
      .put<void>(`${this.baseUrl}/${product.id}`, product, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Delete 1 product
  deleteproduct(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
}
