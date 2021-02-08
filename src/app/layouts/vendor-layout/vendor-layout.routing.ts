import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { ProductsComponent } from "../../pages/products/products.component";
import { ProductListComponent } from "../../pages/product-list/product-list.component";
import { OrdersNReviewComponent } from "../../pages/orders-n-review/orders-n-review.component";
import { AdminLayoutComponent } from "../admin-layout/admin-layout.component";

export const VendorLayoutRoutes: Routes = [

  { path: "admin", component: AdminLayoutComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "products", component: ProductsComponent },
  { path: "product list", component: ProductListComponent },
  { path: "orders & review", component: OrdersNReviewComponent },
];
