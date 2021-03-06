import { Injectable } from "@angular/core";
import { IProductCategory } from "../models/interfaces/product-category.interface";
import { TreeviewItem } from "ngx-treeview";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { CustomMethods } from "../shared/custom-method";

// text: string;
// value: any;
// disabled?: boolean;
// checked?: boolean;
// collapsed?: boolean;
// children?: TreeItem[];
@Injectable()
export class ProductCategoryService{
  baseUrl = "http://localhost:3000/ProductCategory";
  constructor(private httpClient: HttpClient) {

  }
  // Get All productCategorys
  getproductCategories(): Observable<IProductCategory[]> {
    return this.httpClient
      .get<IProductCategory[]>(this.baseUrl)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Return Single productCategory
  getproductCategory(id: number): Observable<IProductCategory> {
    return this.httpClient
      .get<IProductCategory>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Add New productCategory
  addproductCategory(productCategory: IProductCategory): Observable<IProductCategory> {
    return this.httpClient
      .post<IProductCategory>(this.baseUrl, productCategory, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Update 1 productCategory
  updateproductCategory(productCategory: IProductCategory): Observable<void> {
    return this.httpClient
      .put<void>(`${this.baseUrl}/${productCategory.id}`, productCategory, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Delete 1 productCategory
  deleteproductCategory(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
}
