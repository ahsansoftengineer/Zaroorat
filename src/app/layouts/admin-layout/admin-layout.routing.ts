import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { UserComponent } from "../../pages/user/user.component";
import { ProductsComponent } from "../../pages/products/products.component";
import { ProductListComponent } from "../../pages/product-list/product-list.component";
import { OrdersNReviewComponent } from "../../pages/orders-n-review/orders-n-review.component";
import { VendorComponent } from "../../pages/vendor/vendor.component";
import { VendorListComponent } from "../../pages/vendor-list/vendor-list.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserComponent },
  { path: "products", component: ProductsComponent },
  { path: "product list", component: ProductListComponent },
  { path: "orders & review", component: OrdersNReviewComponent },
  { path: "vedor", component: VendorComponent },
  { path: "vendor list", component: VendorListComponent },
];
