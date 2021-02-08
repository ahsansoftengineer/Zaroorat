import { Component, OnInit } from '@angular/core';
import { UserStatusEnum } from '../../models/enums/user-status.enum';
import { UserTypeEnum } from '../../models/enums/user-type.enum';
import { UserInterface } from '../../models/interfaces/user.interface';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  public users:UserInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    this.users = [
      {
        id:101,
        fullName:'Ahsan',
        userName:'ahsanking',
        gender:'Male',
        email:'ahsan@test.com',
        image: './assets/img/angular.jpg',
        userType:UserTypeEnum.Vendor,
        businessName:'Ahsan Private Limited',
        contact:'0321-2827700',
        nTNNumber:'NTN-12345',
        userStatus:UserStatusEnum.Enabled,
        complain:'No Complain Recived',
      },
      {
        id:102,
        fullName:'Asim Khan',
        userName:'asimfarooqi',
        gender:'Male',
        email:'asim@test.com',
        image: './assets/img/angular.jpg',
        userType:UserTypeEnum.Vendor,
        businessName:'Asim Private Limited',
        contact:'0321-2826600',
        nTNNumber:'NTN-12345',
        userStatus:UserStatusEnum.Disabled,
        complain:'Blunder with Client id 110',
      },
      {
        id:103,
        fullName:'Asrin',
        userName:'AsrinHanif',
        gender:'Female',
        email:'Asrin@test.com',
        image: './assets/img/angular.jpg',
        userType:UserTypeEnum.Vendor,
        businessName:'Asrin Private Limited',
        contact:'0321-3638795',
        nTNNumber:'NTN-85795',
        userStatus:UserStatusEnum.Enabled,
        complain:'Nothing',
      },
      {
        id:104,
        fullName:'Shabnam Mosi',
        userName:'shabnammosi123',
        gender:'Female',
        email:'shabnammosi@test.com',
        image: './assets/img/angular.jpg',
        userType:UserTypeEnum.Vendor,
        businessName:'Asrin Private Limited',
        contact:'0321-3638795',
        nTNNumber:'NTN-12385',
        userStatus:UserStatusEnum.Disabled,
        complain:'Blunder with clinet',
      },
      {
        id:105,
        fullName:'Sami Haroon',
        userName:'samiharoonurrashid',
        gender:'Male',
        email:'samiharoon@test.com',
        image: './assets/img/angular.jpg',
        userType:UserTypeEnum.Admin,
        businessName:'Sami Haroon Enterprise Limited',
        contact:'0321-4587292',
        nTNNumber:'NTN-112233',
        userStatus:UserStatusEnum.Pending,
        complain:'Nothing',
      },
    ]
  }

}
