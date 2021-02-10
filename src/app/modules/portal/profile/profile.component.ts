import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../../models/interfaces/user.interface';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService) { }
  public user: UserInterface;
  ngOnInit(): void {
    this.user = this.userService.users[0]
  }
}
