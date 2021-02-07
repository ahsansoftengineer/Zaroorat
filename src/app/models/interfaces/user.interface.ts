import { userStatus } from "../enums/userStatus.enum";
import { userType } from "../enums/userType.enums";

export interface user{
  id:number;
  name:string;
  gender:string;
  email:string;
  access:userType;
  businessName:string;
  contact:string;
  nTNNumber:string;
  status:userStatus;
  complain:string;
  // userbyID(id: number): user;
  // usergetAll(): user[];
  // usergetSearch(): user[];
  // userUpdate(user:user):void;
  // userInsert(user:user):void;
}
