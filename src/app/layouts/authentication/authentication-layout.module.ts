import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { SignInLayoutRoutes } from "./authentication-layout-routing.module";
import { SignInLayoutComponent } from './authentication-layout.component';
import { SignInComponent } from '../../pages/sign-in/sign-in.component';
import { SignUpComponent } from '../../pages/sign-up/sign-up.component';
import { ForgetPasswordComponent } from '../../pages/forget-password/forget-password.component';
import { ChangePasswordComponent } from '../../pages/change-password/change-password.component';




@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forChild(SignInLayoutRoutes),
  ],
  declarations: [
    SignInLayoutComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent
  ],
})
export class SignInLayoutModule { }
