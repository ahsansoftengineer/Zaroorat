import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { IContact } from "../../models/interfaces/contact.interface";
import { IUser } from "../../models/interfaces/user.interface";
import { UserService } from "../../services/user.service";
import { ContactService } from "../../services/contact.service";
import { FormControl, FormGroup } from "@angular/forms";
import { IChat } from "../../models/interfaces/chat.interface";
import { CustomMethods } from "../../shared/custom-method";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {
  // Public Properties
  @Input()
  public user: IUser;
  public chatedUser: IUser;
  public allUser: IUser[] = []; // Temp
  public mycontacts: IContact;
  public myContactUser: IUser[] = [];
  public myChats: IChat[] = [];
  public allChats: IChat[] = [];
  public newChat: IChat;

  // Form Controls
  searchControl = new FormControl("");
  chatMessage = new FormControl("");

  //Other Properties
  public imgPath: string = CustomMethods.userPath;
  public searchText: string;

  isError: boolean = false;
  errMessage: string = "no error";
  // Public Properties
  public minimize: boolean = true;

  constructor(
    private userService: UserService,
    private contactService: ContactService
  ) {}

  // Input Properties
  @Input()
  public chatvisible: boolean = true;

  // Output Properties
  @Output()
  public chatBotContact = new EventEmitter<boolean>();
  @Output()
  public chatBotwithContact = new EventEmitter<IUser>();

  public displayChat(displayBot: boolean): void {
    this.chatvisible = !displayBot;
    this.chatBotContact.emit(this.chatvisible);
  }
  ngOnInit(): void {
    this.getuser(1);
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
          // this.getallChats(); // Temporary
        });
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
  letsChat(myContactedUser: IUser) {
    this.chatBotContact.emit(false);
    this.chatvisible = !this.chatvisible;
    this.chatBotwithContact.emit(myContactedUser);
  }
}
