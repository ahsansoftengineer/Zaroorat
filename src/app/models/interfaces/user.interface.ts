import { UserTypeEnum } from "../enums/user-type.enum";
import { UserStatusEnum } from "../enums/user-status.enums";
import { UserBackgroundSettings } from "../enums/user-background-settings.enums";
import { UserSidebarSettings } from "../enums/user-sidebar-settings.enums";

export interface IUser{
  id:number;
  name:string;
  userName:string; // Login Name
  businessName:string; // -Admin / Vendor Authority / Client Name
  password:string; // Only Vendor
  gender:string;
  email:string;
  contact:string;
  nTNNumber:string;
  userType:UserTypeEnum; // Admin, Vendor
  userStatus:UserStatusEnum; // Enabled, Disabled, Pending
  online:boolean;
  userImage?:string;
  userBanner?:string; // -Admin
  complain?:string;
  address?:string;
  city?:string;
  postal?:number;
  background:UserBackgroundSettings;
  sidebar:UserSidebarSettings;
}
