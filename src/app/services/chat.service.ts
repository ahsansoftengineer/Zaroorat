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
import { CustomMethods } from "../shared/custom-method";

@Injectable({
  providedIn: "root",
})
export class ChatService {
  baseUrl = "http://localhost:3000/chat";
  constructor(private httpClient: HttpClient) {}
  // Return Single Employee Chat
  getChat(id: number): Observable<IChat> {
    return this.httpClient
      .get<IChat>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Return MyChats List
  getMyChats(userA: number, userB: number): Observable<IChat[]> {
    return this.httpClient
      .get<IChat[]>(`${this.baseUrl}/${userA & userB}`)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Get All Chats
  getChats(): Observable<IChat[]> {
    return this.httpClient
      .get<IChat[]>(this.baseUrl)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Add New Chat
  addChat(chat: IChat): Observable<IChat> {
    return this.httpClient
      .post<IChat>(this.baseUrl, chat, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Update 1 Chat
  updateChat(chat: IChat): Observable<void> {
    return this.httpClient
      .put<void>(`${this.baseUrl}/${chat.id}`, chat, {
        headers: new HttpHeaders({
          "Content-Type": "application/json",
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Delete 1 Chat
  deleteChat(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
}
