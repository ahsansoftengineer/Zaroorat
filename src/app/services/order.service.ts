import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import { ORDER_STATUS_ENUM } from "../models/enums/order-status.enums";
import { IOrder } from "../models/interfaces/order.interface";
import { CustomMethods } from "../shared/custom-method";
import { UserService } from "./user.service";

@Injectable()
export class OrderService implements IOrder {
  public id: number;
  public productOrder: number; // IProduct
  public quantity: number;
  public amount: number;
  public orderStatus: string;
  public orderedTo: number; // IUser
  public orderedBy: number; // IUser
  public orderDate: string;
  public deliveryDate: string;
  public address: string;
  public reciver?: string;
  baseUrl = "http://localhost:3000/Order";
  constructor(private httpClient: HttpClient) {}
  // Get All order
  getorders(): Observable<IOrder[]> {
    return this.httpClient
      .get<IOrder[]>(this.baseUrl)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Return Single order
  getorder(id: number): Observable<IOrder> {
    return this.httpClient
      .get<IOrder>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Add New order
  addorder(order: IOrder): Observable<IOrder> {
    return this.httpClient
      .post<IOrder>(this.baseUrl, order, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Update 1 order
  updateorder(order: IOrder): Observable<void> {
    return this.httpClient
      .put<void>(`${this.baseUrl}/${order.id}`, order, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Delete 1 order
  deleteorder(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
}
