import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { UserBackgroundSettings } from "../models/enums/user-background-settings.enums";
import { UserSidebarSettings } from "../models/enums/user-sidebar-settings.enums";
import { UserStatusEnum } from "../models/enums/user-status.enums";
import { UserTypeEnum } from "../models/enums/user-type.enum";
import { IUser } from "../models/interfaces/user.interface";
import { CustomMethods } from "../shared/custom-method";

@Injectable()
export class UserService implements IUser {
  public id: number;
  public fullName: string;
  public userName: string; // Login Name
  public businessName: string; // -Admin
  public password: string; // Only Vendor
  public gender: string;
  public email: string;
  public contact: string;
  public nTNNumber: string;
  public userType: UserTypeEnum; // Admin, Vendor
  public userStatus: UserStatusEnum; // Enabled, Disabled, Pending
  public image?: string;
  public imagetitle?: string; // -Admin
  public complain?: string;
  public address?: string;
  public city?: string;
  public postal?: number;
  public online: boolean;
  public background: UserBackgroundSettings;
  public sidebar: UserSidebarSettings;
  public users?: IUser[];

  baseUrl = "http://localhost:3000/user";
  constructor(private httpClient: HttpClient) {
    this.getUsers().subscribe(
      (users) => this.users = users,
      (err) => console.log(err)
    )
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
