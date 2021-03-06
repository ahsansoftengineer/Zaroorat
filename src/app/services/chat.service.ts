import { Injectable } from "@angular/core";
import { IChat } from "../models/interfaces/chat.interface";
import { IUser } from "../models/interfaces/user.interface";
import { UserService } from "./user.service";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  baseUrl = "http://localhost:3000/chat";
  constructor(private httpClient: HttpClient) {}
  // Get All Chats
  getChats(): Observable<IChat[]> {
    return this.httpClient
      .get<IChat[]>(this.baseUrl)
      .pipe(catchError(this.handleError));
  }
  // Return MyChats List
  getMyChats(userA: number, userB: number): Observable<IChat[]> {
    return this.httpClient
      .get<IChat[]>(`${this.baseUrl}/${userA & userB}`)
      .pipe(catchError(this.handleError));
  }
  // Return Single Employee
  getChat(id: number): Observable<IChat> {
    return this.httpClient
      .get<IChat>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  // Add New Chat
  addChat(chat: IChat): Observable<IChat> {
    return this.httpClient
      .post<IChat>(this.baseUrl, chat, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(this.handleError));
  }
  // Update 1 Chat
  updateChat(chat: IChat): Observable<void> {
    return this.httpClient
      .put<void>(`${this.baseUrl}/${chat.id}`, chat, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(this.handleError));
  }
  // Delete 1 Chat
  deleteChat(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  // Handle Errors
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side Error :", errorResponse.error.message);
    } else {
      console.error("Server Side Error :", errorResponse);
    }
    return throwError(
      "There is a problem with the service. We are notified & working on it. Please try again later."
    );
  }
}
