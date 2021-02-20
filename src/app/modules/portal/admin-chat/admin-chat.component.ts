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
  public minimize: boolean = true;
  public mycontacts: IUser[];
  public searchText: string;

  constructor(
    private userService: UserService,
    private contactService: ContactService,
    private chatService: ChatService
  ) {}
  searchControl = new FormControl("");

  // Input Properties
  @Input()
  public chatvisible: boolean = false;
  @Input()
  public meUser: IUser;

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
    this.chatBotContact.emit(false);
    this.chatvisible = !this.chatvisible;
    this.chatBotwithContact.emit(myContactedUser);
  }

  myChats: IChat[];
  @Input()
  public chatBotHide: boolean = false;
  @Input()
  public contactedUser: IUser;
  ngOnChanges(changes: SimpleChanges): void {
    if (this.contactedUser) {
      this.myChats = this.chatService.allChats.filter(
        (x) =>
          (x.userA.id === this.meUser.id &&
            x.userB.id === this.contactedUser.id) ||
          (x.userA.id === this.contactedUser.id &&
            x.userB.id === this.meUser.id)
      );
    }
  }
}
