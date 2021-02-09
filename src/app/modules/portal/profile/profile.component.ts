import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
// import { UserStatusEnum } from '../../../models/enums/user-status.enum';
// import { UserTypeEnum } from '../../../models/enums/user-type.enum';
// import { UserInterface } from '../../../models/interfaces/user.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService) { }
  public user = this.userService.users[0];
  ngOnInit(): void {
  }
}
