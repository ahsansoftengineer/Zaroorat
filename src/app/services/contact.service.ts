import { Injectable } from "@angular/core";
import { IContact } from "../models/interfaces/contact.interface";
import { IUser } from "../models/interfaces/user.interface";
import { UserService } from "./user.service";

@Injectable()
export class ContactService implements IContact {
  public userService?: UserService = new UserService();

  id: number;
  currentUser: IUser;
  contacts: IUser[];
  allContacts: IContact[] = [
    {
      id: 1,
      currentUser: this.userService.users[0],
      contacts: [
        this.userService.users[1],
        this.userService.users[2],
        this.userService.users[3],
      ],
    },
    {
      id: 2,
      currentUser: this.userService.users[1],
      contacts: [
        this.userService.users[0],
        this.userService.users[2],
        this.userService.users[3],
      ],
    },
    {
      id: 3,
      currentUser: this.userService.users[2],
      contacts: [
        this.userService.users[1],
        this.userService.users[0],
        this.userService.users[3],
      ],
    },
    {
      id: 4,
      currentUser: this.userService.users[4],
      contacts: [this.userService.users[2], this.userService.users[3]],
    },
    {
      id: 5,
      currentUser: this.userService.users[3],
      contacts: [
        this.userService.users[1],
        this.userService.users[4],
        this.userService.users[2],
        this.userService.users[3],
      ],
    },
  ];
  constructor() {}
}
