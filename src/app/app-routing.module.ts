import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
// import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/authentication/authentication.module").then(
        (m) => m.AuthenticationLayoutModule
      ),
  },
  {
    path: "portal",
    component: LayoutComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("./modules/portal/portal.module").then((m) => m.PortalModule),
      },
    ],
  },
  {
    path: "",
    redirectTo: "/portal",
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "/portal",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

// Auth -> full screen

// BaseLayout ->

// User -> Dashboard
// User -> auth
// User -> notification

// Vendor -> Listing

// Product -> Crud
// Product -> orders
// Product -> reviews
