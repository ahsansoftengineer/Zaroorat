import { Component, OnInit } from '@angular/core';
import { IUser } from '../../../models/interfaces/user.interface';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService) { }
  public user: IUser;
  public userIndex:string = '0';
  isError: boolean = false;
  errMessage: string = 'No Error'
  ngOnInit(): void {
    // this.user = this.userService.users[this.userIndex]
  }
  tablelength: string;
  updateUserValue(){
  this.userIndex = ((<HTMLInputElement>document.getElementById('index')).value);
   if(!(this.userIndex < '0') && !(this.userIndex > this.tablelength)){
    // this.user = this.userService.users[this.userIndex]
   }else{
     console.warn('No Item Exsist');
   }

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
