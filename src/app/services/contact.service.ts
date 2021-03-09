import { Injectable } from '@angular/core';
import { IUser } from "../models/interfaces/user.interface";
import { UserService } from "./user.service";
import { IContact } from "../models/interfaces/contact.interface";
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient,  HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CustomMethods } from '../shared/custom-method';

@Injectable()
export class ContactService{
  baseUrl = 'http://localhost:3000/contact';
  constructor(private httpClient: HttpClient) {}
  // Not in Use Return Employee List
  getContacts(id:number): Observable<IContact[]> {
    return this.httpClient
      .get<IContact[]>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Return All Contacts of Single Employees
  getContact(id: number): Observable<IContact> {
    return this.httpClient
      .get<IContact>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
  // Add New Chat
  addContact(contact: IContact): Observable<IContact> {
    return this.httpClient
      .post<IContact>(this.baseUrl, contact, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Update 1 Contact
  updateContact(contact: IContact): Observable<void> {
    return this.httpClient
      .put<void>(`${this.baseUrl}/${contact.id}`, contact, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .pipe(catchError(CustomMethods.handleError));
  }
  // Delete Contact
  deleteContact(id: number): Observable<void> {
    return this.httpClient
      .delete<void>(`${this.baseUrl}/${id}`)
      .pipe(catchError(CustomMethods.handleError));
  }
}
