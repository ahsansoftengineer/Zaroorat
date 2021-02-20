import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { IChat } from "../../../models/interfaces/chat.interface";
import { ChatService } from "../../../services/chat.service";
import { IUser } from "../../../models/interfaces/user.interface";
import { ContactService } from "../../../services/contact.service";
import { UserService } from "../../../services/user.service";

@Component({
  selector: "app-admin-chat",
  templateUrl: "./admin-chat.component.html",
  styleUrls: ["./admin-chat.component.scss"],
})
export class AdminChatComponent implements OnInit {
  // Public Properties
  public mycontacts: IUser[];
  public searchText: string;
  public chatedUser: IUser;
  public myChats: IChat[];

  @Input()
  public meUser: IUser;
  constructor(
    private userService: UserService,
    private contactService: ContactService,
    private chatService: ChatService
  ) {}
  searchControl = new FormControl("");
  ngOnInit(): void {
    this.meUser = this.userService.users[0];
    this.contactService.allContacts
      .filter((x) => x.currentUser.id == this.meUser.id)
      .map((x) => (this.mycontacts = x.contacts));
  }
  // Contacts Search Functionality
  filterContacts(): void {
    this.searchText = this.searchControl.value;
    if (this.searchText === "") {
      this.contactService.allContacts
        .filter((x) => x.currentUser.id == this.meUser.id)
        .map((x) => (this.mycontacts = x.contacts));
    } else {
      this.mycontacts = this.mycontacts.filter(
        (x) =>
          x.fullName === this.searchText ||
          x.businessName === this.searchText ||
          x.userName === this.searchText
      );
    }
  }
  // Start Chating with Specific Person in List
  letsChat(myContactedUser: IUser) {
    this.chatedUser = myContactedUser;
    this.myChats = this.chatService.allChats.filter(
      (x) =>
        (x.userA.id === this.meUser.id &&
          x.userB.id === this.chatedUser.id) ||
        (x.userA.id === this.chatedUser.id &&
          x.userB.id === this.meUser.id)
    );
  }

}
