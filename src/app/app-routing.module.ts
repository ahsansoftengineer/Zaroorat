import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
// import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'sign in',
    loadChildren: () =>
      import("./layouts/authentication/authentication-layout.module").then(
        (m) => m.SignInLayoutModule
      ),
  },
  {
    path: 'sign up',
    loadChildren: () =>
      import("./layouts/authentication/authentication-layout.module").then(
        (m) => m.SignInLayoutModule
      ),
  },
  {
    path: 'forget password',
    loadChildren: () =>
      import("./layouts/authentication/authentication-layout.module").then(
        (m) => m.SignInLayoutModule
      ),
  },
  {
    path: "",
    loadChildren: () =>
      import("../app/components/components.module").then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: "**",
    loadChildren: () =>
      import("../app/components/components.module").then(
        (m) => m.ComponentsModule
      ),
  },
  // {
  //   path: '',
  //   redirectTo: 'sign up',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   redirectTo: 'sign up',
  //   pathMatch:'full'
  // },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
