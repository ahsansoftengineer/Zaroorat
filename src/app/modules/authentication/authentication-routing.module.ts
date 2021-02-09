import { Routes } from "@angular/router";

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { ChangePasswordComponent } from "./change-password/change-password.component";

export const AuthenticationRoutes: Routes = [
  { path: "sign-in", component: SignInComponent },
  { path: "sign-up", component: SignUpComponent },
  { path: "forget-password", component: ForgetPasswordComponent },
  { path: "change-password", component: ChangePasswordComponent },
  { path: "", redirectTo: "sign-in", pathMatch: "full" },
  { path: "**", redirectTo: "sign-in", pathMatch: "full" },
];
