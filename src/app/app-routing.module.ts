import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./layout/layout.component";
// import { DashboardComponent } from "./pages/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () =>
      import("./layouts/authentication/authentication-layout.module").then(
        (m) => m.AuthenticationLayoutModule
      ),
  },
  {
    path: "portal",
    component: LayoutComponent,
    children: [
      {
        path: "products",
        loadChildren: () =>
        import("./modules/products/products.module").then(
          (m) => m.ProductsModule
        ),
      },
      {
        path: "products",
        loadChildren: () =>
        import("./modules/products/products.module").then(
          (m) => m.ProductsModule
        ),
      },
    ],
  },

  // {
  //   path: "sign in",
  //   loadChildren: () =>
  //     import("./layouts/authentication/authentication-layout.module").then(
  //       (m) => m.AuthenticationLayoutModule
  //     ),
  // },
  // {
  //   path: "admin",
  //   loadChildren: () =>
  //     import("./layouts/admin-layout/admin-layout.module").then(
  //       (m) => m.AdminLayoutModule
  //     ),
  // },
  // {
  //   path: "vendor",
  //   loadChildren: () =>
  //     import("./layouts/vendor-layout/vendor-layout.module").then(
  //       (m) => m.VendorLayoutModule
  //     ),
  // },
  // {
  //   path: "",
  //   loadChildren: () =>
  //     import("./layouts/authentication/authentication-layout.module").then(
  //       (m) => m.AuthenticationLayoutModule
  //     ),
  //   pathMatch: "full",
  // },
  // {
  //   path: "**",
  //   loadChildren: () =>
  //     import("./layouts/authentication/authentication-layout.module").then(
  //       (m) => m.AuthenticationLayoutModule
  //     ),
  //   pathMatch: "full",
  // },

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

