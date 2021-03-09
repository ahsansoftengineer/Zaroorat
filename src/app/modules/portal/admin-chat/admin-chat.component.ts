import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { IChat } from "../../../models/interfaces/chat.interface";
import { ChatService } from "../../../services/chat.service";
import { IUser } from "../../../models/interfaces/user.interface";
import { ContactService } from "../../../services/contact.service";
import { UserService } from "../../../services/user.service";
import { IContact } from "../../../models/interfaces/contact.interface";
import { CustomMethods } from "../../../shared/custom-method";

@Component({
  selector: "app-admin-chat",
  templateUrl: "./admin-chat.component.html",
  styleUrls: ["./admin-chat.component.scss"],
})
export class AdminChatComponent implements OnInit {
  // Public Properties
  public user: IUser;
  public chatedUser: IUser;
  public allUser: IUser[] = []; // Temp
  public mycontacts: IContact;
  public myContactUser: IUser[] = [];
  public myChats: IChat[] = [];
  public allChats: IChat[] = [];

  public imgPath: string = CustomMethods.userPath;
  public searchText: string;

  isError: boolean = false;
  errMessage: string = "no error";

  constructor(
    private userService: UserService,
    private contactService: ContactService,
    private chatService: ChatService
  ) {}
  searchControl = new FormControl("");
  ngOnInit(): void {
    this.getuser(1);
    // this.contactService.allContacts
    //   .filter((x) => x.currentUser.id == this.meUser.id)
    //   .map((x) => (this.mycontacts = x.contacts));
  }
  getuser(id: number = 1) {
    this.userService.getUser(id).subscribe(
      (user: IUser) => {
        this.user = user;
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "Unable to display result of ID " + id;
      },
      () => {
        this.isError = false;
        this.errMessage = "Showing Result of ID " + id;
        this.getContacts(id);
      }
    );
  }
  getContacts(myId: number = 1) {
    this.contactService.getContact(myId).subscribe(
      (mycontacts: IContact) => {
        this.mycontacts = mycontacts;
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "Unable to fetch your Contacts";
      },
      () => {
        this.isError = false;
        this.errMessage = "your Contacts are displayed";
        // Change at Real API
        this.getAllUser();
      }
    );
  }
  getAllUser() {
    this.userService.getUsers().subscribe(
      (users: IUser[]) => {
        this.allUser = users;
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "All Users cannot be loaded";
      },
      () => {
        this.isError = false;
        this.errMessage = "All Users have been Reterived";
        // Temporary Change at Real API
        this.myContactUser = [];
        this.mycontacts.contacts.forEach((y) => {
            this.myContactUser.push(this.allUser.find((x) => x.id === y));
        this.getallChats(); // Temporary
        })
      }
    );
  }
  // Cannot Implement due to flexibility
  getMyChats(userID: number, chatedUserId: number) {
    this.chatService.getMyChats(userID, chatedUserId).subscribe(
      (mychats: IChat[]) => {
        this.myChats = mychats;
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "Unable to Load Chats";
      },
      () => {
        this.isError = false;
        this.errMessage = "Chats are being Displayed";
      }
    );
  }
  // Temporary Alternate
  getallChats() {
    this.chatService.getChats().subscribe(
      (allChats: IChat[]) => {
        this.allChats = allChats;
      },
      (err: any) => {
        console.log(err);
        this.isError = true;
        this.errMessage = "Unable to Load Chats";
      },
      () => {
        this.isError = false;
        this.errMessage = "Chats are being Displayed";
      }
    );
  }
  // Contacts Search Functionality
  filterContacts(): void {
    this.searchText = this.searchControl.value;
    if (this.searchText === "") {
      this.myContactUser = [];
      this.mycontacts.contacts.forEach((y) => {
        this.myContactUser.push(this.allUser.find((x) => x.id === y));
      });
    } else {
      this.myContactUser = this.allUser.filter(
        (x) =>
          x.name === this.searchText ||
          x.businessName === this.searchText ||
          x.userName === this.searchText
      );
    }
  }
  // Start Chating with Specific Person in List
  letsChat(chatedUser: IUser) {
    this.chatedUser = chatedUser;
    if (this.allChats.length < 1) {
      this.getallChats();
    }
    this.myChats = this.allChats.filter(
      (x) =>
        (x.userA === this.user.id && x.userB === this.chatedUser.id) ||
        (x.userA === this.chatedUser.id && x.userB === this.user.id)
    );
  }
  // Temporary
  changeUserControl = new FormControl("");
  changeUser() {
    this.myContactUser = [];
    const Uid = +this.changeUserControl.value;
    this.getuser(Uid);
  }
  //compute duration
  computeDuration(date:  string): string{
    return CustomMethods.computeDuration(date)
  }
}
// window.setInterval(function() {
//   var elem = document.getElementById("chatBody");
//   elem.scrollTop = elem.scrollHeight;
// }, 5000);
