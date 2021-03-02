import { Injectable } from '@angular/core';
import { IUser } from "../models/interfaces/user.interface";
import { UserService } from "./user.service";
import { IContact } from "../models/interfaces/contact.interface";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient,  HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ContactService implements IContact {
  public userService?: UserService;

  id: number;
  currentUser: IUser;
  contacts: IUser[];

  baseUrl = 'http://localhost:3000/contacts';
  constructor(private httpClient: HttpClient) {}
  // Return Employee List
  getContacts(id:number): Observable<IContact[]> {
    return this.httpClient
      .get<IContact[]>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  // Handle Errors
  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
      console.error('Client Side Error :', errorResponse.error.message);
    } else {
      console.error('Server Side Error :', errorResponse);
    }
    return throwError(
      'There is a problem with the service. We are notified & working on it. Please try again later.'
    );
  }
  // Return Single Employee
  getContact(id: number): Observable<IContact> {
    return this.httpClient
      .get<IContact>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
  // Add New Chat
  addContact(contact: IContact): Observable<IContact> {
    return this.httpClient
      .post<IContact>(this.baseUrl, contact, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(catchError(this.handleError));
  }
  // Update 1 Contact
  updateContact(contact: IContact): Observable<void> {
    return this.httpClient
      .put<void>(`${this.baseUrl}/${contact.id}`, contact, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(catchError(this.handleError));
  }
  // Delete Contact
  deleteContact(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }
}
