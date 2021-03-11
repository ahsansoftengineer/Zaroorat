import { Component, OnInit } from '@angular/core';
import { CustomMethods } from '../../../shared/custom-method';
import { IUser } from '../../../models/interfaces/user.interface';
import { UserService } from '../../../services/user.service';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService) { }
  public user: IUser;
  userimagepath: string = CustomMethods.userPath;
  userbannerpath: string = CustomMethods.userBanner;
  isError: boolean = false;
  errMessage: string = 'No Error'
  currentUserId = 1;
  ngOnInit(): void {
    this.getuser(this.currentUserId);
  }
  tablelength: string;
  ChangeUser(){
    const id = +((<HTMLInputElement>document.getElementById('index')).value);
    this.getuser(id);
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
      }
    );
  }
}
