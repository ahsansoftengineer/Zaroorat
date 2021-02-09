import { UserTypeEnum } from "../enums/user-type.enum";
import { UserStatusEnum } from "../enums/user-status.enum";

export interface UserInterface{
  id:number;
  fullName:string;
  userName:string; // Login Name
  businessName:string; // -Admin
  password:string; // Only Vendor
  gender:string;
  email:string;
  contact:string;
  nTNNumber:string;
  userType:UserTypeEnum; // Admin, Vendor
  userStatus:UserStatusEnum; // Enabled, Disabled, Pending
  image?:string;
  imagetitle?:string; // -Admin
  complain?:string;
  address?:string;
  city?:string;
  postal?:number
}
