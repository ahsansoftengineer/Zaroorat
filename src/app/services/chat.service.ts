import { Injectable } from "@angular/core";
import { IChat } from "../models/interfaces/chat.interface";
import { IUser } from "../models/interfaces/user.interface";
import { UserService } from "./user.service";
    // Date Construct in JavaScript
    // let today = new Date()
    // let birthday = new Date('December 17, 1995 03:24:00')
    // let birthday = new Date('1995-12-17T03:24:00')
    // let birthday = new Date(1995, 11, 17)            // the month is 0-indexed
    // let birthday = new Date(1995, 11, 17, 3, 24, 0)

@Injectable()
export class ChatService implements IChat {
  public userService?: UserService = new UserService();

  id:number;
  userA:IUser; // Self
  userB:IUser; // Target User
  message: string; // Self
  date: Date;

  computeDuration(date: Date): string{
    const currentDateTime = Date.now();
    const duration = currentDateTime - date.getDate();
    // Hours
    if(true){
      return ''
    }
    // Today
    else if(true) {

    }
    // Yesterday
    else if(true) {

    }
    // Before Yesterday
    else {

    }
  }
  allChats:IChat[] = [
    {
      id: 1,
      userA: this.userService.users[0],
      userB: this.userService.users[1],
      message: "Bhi Kesay Ho",
      date: new Date(12/12/2021)
    },
    {
      id: 2,
      userA: this.userService.users[0],
      userB: this.userService.users[1],
      message: "Jawab to de do",
      date: new Date(12/12/2021)
    },
    {
      id: 3,
      userA: this.userService.users[1],
      userB: this.userService.users[0],
      message: "Yar Busy tha bolo",
      date: new Date(12/12/2021)
    },
    {
      id: 4,
      userA: this.userService.users[0],
      userB: this.userService.users[1],
      message: "Assignment ka kiya huwa",
      date: new Date(12/12/2021)
    },
    {
      id: 5,
      userA: this.userService.users[1],
      userB: this.userService.users[0],
      message: "Jama karwa diya hai",
      date: new Date(12/12/2021)
    },
    {
      id: 6,
      userA: this.userService.users[1],
      userB: this.userService.users[2],
      message: "Computer required in bulk quantity",
      date: new Date(12/12/2021)
    },
    {
      id: 7,
      userA: this.userService.users[2],
      userB: this.userService.users[1],
      message: "20 piece per 10% discount hai aur 50 piece per 20%",
      date: new Date(12/12/2021)
    },
    {
      id: 8,
      userA: this.userService.users[2],
      userB: this.userService.users[1],
      message: "Apko kitna Chahiya",
      date: new Date(12/12/2021)
    },
    {
      id: 9,
      userA: this.userService.users[0],
      userB: this.userService.users[2],
      message: "Samsung Galxy Required 10",
      date: new Date(12/12/2021)
    },
    {
      id: 10,
      userA: this.userService.users[2],
      userB: this.userService.users[0],
      message: "Mal End Ho Gaya Hai",
      date: new Date(12/12/2021)
    },
    {
      id: 11,
      userA: this.userService.users[0],
      userB: this.userService.users[2],
      message: "Agla Mal Kab Aye Ga",
      date: new Date(12/12/2021)
    },
    {
      id: 12,
      userA: this.userService.users[2],
      userB: this.userService.users[0],
      message: "March / April mai Maloom Karlena",
      date: new Date(12/12/2021)
    },
    {
      id: 13,
      userA: this.userService.users[0],
      userB: this.userService.users[3],
      message: "Ap ka kiya hal hai",
      date: new Date(12/12/2021)
    },
    {
      id: 14,
      userA: this.userService.users[0],
      userB: this.userService.users[3],
      message: "Bhi Reply to kar do",
      date: new Date(12/12/2021)
    },
  ]


}
