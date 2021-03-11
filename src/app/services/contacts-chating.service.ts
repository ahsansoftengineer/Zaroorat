import { Injectable } from "@angular/core";
import { IChat } from "../models/interfaces/chat.interface";
import { ChatService } from "../services/chat.service";
import { IUser } from "../models/interfaces/user.interface";
import { ContactService } from "../services/contact.service";
import { UserService } from "../services/user.service";
import { IContact } from "../models/interfaces/contact.interface";
import { CustomMethods } from "../shared/custom-method";

@Injectable({
  providedIn: "root",
})
export class ContactsChatingService {
  // Public Properties
  public user: IUser;
  public chatedUser: IUser;
  public allUser: IUser[] = []; // Temp
  public mycontacts: IContact;
  public myContactUser: IUser[] = [];
  public myChats: IChat[] = [];
  public allChats: IChat[] = [];
  public newChat: IChat;

  isError: boolean = false;
  errMessage: string = "no error";

  constructor(
    private userService: UserService,
    private contactService: ContactService,
    private chatService: ChatService
  ) {
    this.getuser(1);
  }

  ngOnInit(): void {}
  // Chain 1
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
  // Chain 2
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
  // Chain 3
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
        });
      }
    );
  }
  // Contacts Search Functionality
  filterContacts(searchText: string): void {
    if (searchText === "") {
      this.myContactUser = [];
      this.mycontacts.contacts.forEach((y) => {
        this.myContactUser.push(this.allUser.find((x) => x.id === y));
      });
    } else {
      this.myContactUser = this.allUser.filter(
        (x) =>
          x.name === searchText ||
          x.businessName === searchText ||
          x.userName === searchText
      );
    }
  }
  // Temporary Alternate
  getallChats(letsChat: boolean = false) {
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
        if (letsChat) {
          this.letsChat(this.chatedUser);
        }
      }
    );
  }
  // Cannot Implement due to API flexibility
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
  // Send Chat
  sendChat(chatMessage: string, chatObject: any = null) {
    this.newChat = {
      id: 0,
      userA: this.user.id,
      userB: this.chatedUser.id,
      message: chatMessage,
      date: new Date(),
    };
    this.chatService.addChat(this.newChat).subscribe(
      (sendMessage) => console.log(sendMessage),
      (err) => console.log("Chat Send Error = " + err),
      () => {
        this.allChats.push(this.newChat);
        this.letsChat(this.chatedUser);
      }
    );
  }
  deleteChat(chatId: number) {
    this.chatService.deleteChat(chatId).subscribe(
      (sendMessage) => console.log(sendMessage),
      (err) => console.log("Chat not Deleted Error = " + err),
      () => {
        this.getallChats(true);
      }
    );
  }
  // Temporary
  // changeUserControl = new FormControl("");
  // changeUser() {
  //   this.myContactUser = [];
  //   const Uid = +this.changeUserControl.value;
  //   this.getuser(Uid);
  // }
  //compute duration (Last Message / User Online State)
  computeDuration(date: string): string {
    return CustomMethods.computeDuration(date);
  }
}
