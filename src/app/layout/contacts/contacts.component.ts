import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { IContact } from "../../models/interfaces/contact.interface";
import { IUser } from "../../models/interfaces/user.interface";
import { UserService } from "../../services/user.service";
import { ContactService } from "../../services/contact.service";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "app-contacts",
  templateUrl: "./contacts.component.html",
  styleUrls: ["./contacts.component.scss"],
})
export class ContactsComponent implements OnInit {

  // Public Properties
  public minimize: boolean = true;
  public mycontacts: IUser[];
  public searchText: string;

  constructor(
    private userService: UserService,
    private contactService: ContactService
  ) {}
  searchControl = new FormControl("");

  // Input Properties
  @Input()
  public chatvisible: boolean = true;
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
    // this.meUser = this.userService.users[0];
    // this.contactService.allContacts
    //   .filter((x) => x.currentUser.id == this.meUser.id)
    //   .map((x) => (this.mycontacts = x.contacts));
  }
  // Contacts Search Functionality
  filterContacts(): void {
    this.searchText = this.searchControl.value;
    if (this.searchText === "") {
      // this.contactService.allContacts
      //   .filter((x) => x.currentUser.id == this.meUser.id)
      //   .map((x) => (this.mycontacts = x.contacts));
    } else {
      // this.mycontacts = this.mycontacts.filter(
      //   (x) => x.fullName === this.searchText ||
      //    x.businessName === this.searchText ||
      //    x.userName === this.searchText
      // );
    }
  }
  // Start Chating with Specific Person in List
  letsChat(myContactedUser: IUser){
    this.chatBotContact.emit(false);
    this.chatvisible = !this.chatvisible;
    this.chatBotwithContact.emit(myContactedUser);
  }
}
