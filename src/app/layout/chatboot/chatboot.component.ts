import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-chatboot',
  templateUrl: './chatboot.component.html',
  styleUrls: ['./chatboot.component.scss']
})
export class ChatbootComponent implements OnInit {
  public currentUser: IUser;
  public
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.users[0];
  }

}
