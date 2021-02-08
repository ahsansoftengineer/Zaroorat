import { UserTypeEnum } from "../enums/user-type.enum";
import { UserStatusEnum } from "../enums/user-status.enum";

export interface UserInterface{
  id:number;
  fullName:string; // Personel Name
  userName:string; // Login Name
  gender:string;
  email:string;
  userType:UserTypeEnum; // Admin, Vendor
  businessName:string;
  contact:string;
  nTNNumber:string;
  userStatus:UserStatusEnum; // Enabled, Disabled, Pending
  complain:string;
  image:string;
}
