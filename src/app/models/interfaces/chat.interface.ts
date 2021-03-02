import { IUser } from "./user.interface";

export interface IChat {
  id:number;
  userA:IUser; // Self
  userB:IUser; // Target User
  message: string; // Self
  date: Date;

}
