import { Routes } from "@angular/router";

import { SignInComponent } from "../../pages/sign-in/sign-in.component";
import { SignUpComponent } from "../../pages/sign-up/sign-up.component";
import { ForgetPasswordComponent } from '../../pages/forget-password/forget-password.component';
import { ChangePasswordComponent } from '../../pages/change-password/change-password.component';

export const AuthenticationLayoutRoutes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "change-password", component: ChangePasswordComponent }
];
