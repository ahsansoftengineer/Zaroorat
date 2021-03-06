import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { IUser } from "../models/interfaces/user.interface";
import { CustomMethods } from "../shared/custom-method";

@Injectable()
export class UserService {
  baseUrl = "http://localhost:3000/user";
  constructor(private httpClient: HttpClient) {
  }
  // Get All users
  getUsers(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(this.baseUrl)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Return Single User
  getUser(id: number): Observable<IUser> {
    return this.httpClient
      .get<IUser>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Add New user
  addUser(user: IUser): Observable<IUser> {
    return this.httpClient
      .post<IUser>(this.baseUrl, user, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Update 1 user
  updateUser(user: IUser): Observable<void> {
    return this.httpClient
      .put<void>(`${this.baseUrl}/${user.id}`, user, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Delete 1 user
  deleteUser(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
}
