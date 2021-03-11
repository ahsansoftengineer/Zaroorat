import { Injectable } from "@angular/core";
import { IUser } from "../models/interfaces/user.interface";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { CustomMethods } from "../shared/custom-method";
import { IAuth } from "../models/interfaces/auth.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {

  baseUrl = "http://localhost:3000/auth";
  constructor(private httpClient: HttpClient) {}
  // Get All Chats
  signIn(): Observable<IAuth[]> {
    return this.httpClient
      .get<IAuth[]>(this.baseUrl)
      .pipe(catchError(CustomMethods.handleError));
  }
    // Return Single User
    getUser(userName: string, password:string): Observable<IUser> {
      return this.httpClient
        .get<IUser>(`${this.baseUrl}/${{userName: userName, password: password}}`)
        .pipe(catchError(CustomMethods.handleError));
    }
}
