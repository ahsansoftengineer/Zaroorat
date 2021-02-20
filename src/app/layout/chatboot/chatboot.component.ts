import {
  Component,
  OnInit,
  EventEmitter,
  Input,
  SimpleChanges,
} from "@angular/core";
import { IChat } from "../../models/interfaces/chat.interface";
import { ChatService } from "../../services/chat.service";
import { IUser } from "../../models/interfaces/user.interface";
import { UserService } from "../../services/user.service";

@Component({
  selector: "app-chatboot",
  templateUrl: "./chatboot.component.html",
  styleUrls: ["./chatboot.component.scss"],
})
export class ChatbootComponent implements OnInit {
  public minimize: boolean = true;
  @Input()
  public meUser: IUser;
  myChats: IChat[];
  @Input()
  public chatBotHide: boolean = true;
  @Input()
  public contactedUser: IUser;
  constructor(
    private chatService: ChatService,
    private userService: UserService
  ) {
    this.meUser = this.userService.users[0];
  }
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
  ngOnInit(): void {}
}
