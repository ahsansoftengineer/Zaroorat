import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  SimpleChanges,
  Output,
} from "@angular/core";
import { IChat } from "../../models/interfaces/chat.interface";
import { ChatService } from "../../services/chat.service";
import { IUser } from "../../models/interfaces/user.interface";
import { UserService } from "../../services/user.service";
import { CustomMethods } from "../../shared/custom-method";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-chatboot",
  templateUrl: "./chatboot.component.html",
  styleUrls: ["./chatboot.component.scss"],
})
export class ChatbootComponent implements OnInit {
  @Input()
  public user: IUser;
  @Input()
  public chatedUser: IUser;
  @Input()
  public chatBotHide: boolean = true;
  public minimize: boolean = false;
  public resize: boolean = false;
  @Output()
  public chatBotContact = new EventEmitter<boolean>();

  openCloseChat() {
    this.chatBotHide = !this.chatBotHide;
    this.chatBotContact.emit(this.chatBotHide);
  }
  private allChats: IChat[] = [];
  public myChats: IChat[] = [];
  public chats: IChat[];
  private newChat: IChat;

  public imgPath: string = CustomMethods.userPath;
  public errMessage: string = "no Error";
  public isError: boolean = false;

  constructor(
    private chatService: ChatService,
    private userService: UserService
  ) {
    // this.meUser = this.userService.users[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.chatedUser) {
      this.letsChat(this.chatedUser);
    }
  }
  ngOnInit(): void {
    this.getallChats();
  }
  // // Start Chating with Specific Person in List
  // letsChat(chatedUser: IUser) {
  //   this.chatedUser = chatedUser;
  //   if (this.allChats.length < 1) {
  //     this.getallChats();
  //   }
  //   this.myChats = this.allChats.filter(
  //     (x) =>
  //       (x.userA === this.user.id && x.userB === this.chatedUser.id) ||
  //       (x.userA === this.chatedUser.id && x.userB === this.user.id)
  //   );
  // }
  // editButtonClick(employeeId: number) {
  //   this._router.navigate(['/employees/edit', employeeId]);
  // }
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
  deleteChat(chatId: number) {
    if (confirm("Are you sure you want to delete")) {
      this.chatService.deleteChat(chatId).subscribe(
        (deleteMessage) => console.log(deleteMessage),
        (err) => console.log("Chat not Deleted Error = " + err),
        () => {
          this.getallChats(true);
        }
      );
    }
  }
  // Send Chat
  chatMessage = new FormControl("");
  sendChat() {
    const message = this.chatMessage.value;
    this.newChat = {
      id: 0,
      userA: this.user.id,
      userB: this.chatedUser.id,
      message: message,
      date: new Date(),
    };
    this.chatService.addChat(this.newChat).subscribe(
      (sendMessage) => console.log(sendMessage),
      (err) => console.log("Chat Send Error = " + err),
      () => {
        this.allChats.push(this.newChat);
        this.letsChat(this.chatedUser);
        this.chatMessage.setValue("");
      }
    );
  }
  //compute duration (Last Message / User Online State)
  computeDuration(date: string): string {
    return CustomMethods.computeDuration(date);
  }
}
