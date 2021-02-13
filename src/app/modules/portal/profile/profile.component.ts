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
  public userIndex:string = '0';
  ngOnInit(): void {
    this.user = this.userService.users[this.userIndex]
  }
  tablelength: string = (this.userService.users.length - 1).toString()
  updateUserValue(){
  this.userIndex = ((<HTMLInputElement>document.getElementById('index')).value);
   if(!(this.userIndex < '0') && !(this.userIndex > this.tablelength)){
    this.user = this.userService.users[this.userIndex]
   }else{
     console.warn('No Item Exsist');
   }

  }
}
