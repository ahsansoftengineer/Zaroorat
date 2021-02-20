import { Injectable } from "@angular/core";
import { UserBackgroundSettings } from "../models/enums/user-background-settings.enums";
import { UserSidebarSettings } from "../models/enums/user-sidebar-settings.enums";
import { UserStatusEnum } from "../models/enums/user-status.enums";
import { UserTypeEnum } from "../models/enums/user-type.enum";
import { IUser } from "../models/interfaces/user.interface";

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
  public users?: IUser[] = [
    {
      id: 2001,
      fullName: "Ahsan",
      userName: "ahsanenterprises@zaroorat.com", // Login Name
      businessName: "Ahsan Enterprises", // -Admin
      password: "**abc**", // Only Vendor
      gender: "male",
      email: "ahsan@domain.com",
      contact: "0321-2827700",
      nTNNumber: "NTN-25458",
      userType: UserTypeEnum.Vendor, // Admin, Vendor
      userStatus: UserStatusEnum.Pending, // Enabled, Disabled, Pending
      imagetitle: "./assets/img/Banner/BlueBlue.jpg",
      image: "./assets/img/User/User7.PNG", // -Admin
      complain: "New Vendor",
      address: "Korangi 3 1/2",
      city: "Karachi",
      postal: 74900,
      online:true,
      sidebar: UserSidebarSettings.Blue,
      background: UserBackgroundSettings.BgWhite
    },
    {
      id: 2002,
      fullName: "Asim",
      userName: "asimenterprises@zaroorat.com", // Login Name
      businessName: "Asim Enterprises", // -Admin
      password: "**asim**", // Only Vendor
      gender: "male",
      email: "asim@domain.com",
      contact: "0321-2358900",
      nTNNumber: "NTN-28900",
      userType: UserTypeEnum.Admin, // Admin, Vendor
      userStatus: UserStatusEnum.Enabled, // Enabled, Disabled, Pending
      imagetitle: "./assets/img/Banner/BlueCircle.jpg",
      image: "./assets/img/User/User2.png", // -Admin
      complain: "Admin",
      address: "Landhi 36/B",
      city: "Karachi",
      postal: 74900,
      online:true,
      sidebar: UserSidebarSettings.Blue,
      background: UserBackgroundSettings.BgWhite
    },
    {
      id: 2003,
      fullName: "Asrin",
      userName: "asrinzeenat@zaroorat.com", // Login Name
      businessName: "Asrin Private Limited", // -Admin
      password: "**asim**", // Only Vendor
      gender: "Female",
      email: "asrin@domain.com",
      contact: "0333-2695447",
      nTNNumber: "NTN-3698514",
      userType: UserTypeEnum.Vendor, // Admin, Vendor
      userStatus: UserStatusEnum.Enabled, // Enabled, Disabled, Pending
      imagetitle: "./assets/img/Banner/bluepink.jpg",
      image: "./assets/img/User/User3.jpg", // -Admin
      complain: "Fraud",
      address: "Nazimabad 48/C",
      city: "Karachi",
      postal: 74900,
      online:false,
      sidebar: UserSidebarSettings.Blue,
      background: UserBackgroundSettings.BgWhite
    },
    {
      id: 2004,
      fullName: "Mehmood",
      userName: "mehmood@bolbola.com", // Login Name
      businessName: "Mehmood Bol Bola", // -Admin
      password: "**asim**", // Only Vendor
      gender: "Female",
      email: "mehmood@domain.com",
      contact: "0333-1245896",
      nTNNumber: "NTN-258741",
      userType: UserTypeEnum.Vendor, // Admin, Vendor
      userStatus: UserStatusEnum.Enabled, // Enabled, Disabled, Pending
      imagetitle: "./assets/img/Banner/clip.jpg",
      image: "./assets/img/User/User4.png", // -Admin
      complain: "Mehmood Sahab",
      address: "Gulshan 48/C",
      city: "Karachi",
      postal: 74900,
      online:true,
      sidebar: UserSidebarSettings.Blue,
      background: UserBackgroundSettings.BgWhite
    },
    {
      id: 2005,
      fullName: "Aqueela",
      userName: "aqueela@qudosisahabkibewa.com", // Login Name
      businessName: "Quodosi Sahab ki Bewa", // -Admin
      password: "**aqueela**", // Only Vendor
      gender: "Female",
      email: "aqueela@domain.com",
      contact: "0333-2587146",
      nTNNumber: "NTN-369852",
      userType: UserTypeEnum.Admin, // Admin, Vendor --Graphical
      userStatus: UserStatusEnum.Disabled, // Enabled, Disabled, Pending --Graphical
      imagetitle: "./assets/img/Banner/pink.jpg",
      image: "./assets/img/User/User5.jpg", // -Admin
      complain: "Mehmood Sahab",
      address: "Ibrahim Haidre",
      city: "Karachi",
      postal: 74900,
      online:false, // Graphical
      sidebar: UserSidebarSettings.Blue, // --Graphical
      background: UserBackgroundSettings.BgWhite // --Graphical
    },
  ];
  constructor() {}
}
