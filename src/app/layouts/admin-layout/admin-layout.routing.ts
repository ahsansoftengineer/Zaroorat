import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ProductsComponent } from "src/app/pages/products/products.component";
import { ProductListComponent } from "src/app/pages/product-list/product-list.component";
import { OrdersNReviewComponent } from "src/app/pages/orders-n-review/orders-n-review.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "products", component: ProductsComponent },
  { path: "product list", component: ProductListComponent },
  { path: "orders & review", component: OrdersNReviewComponent },
];
