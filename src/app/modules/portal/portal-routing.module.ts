// Modules
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Components
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { UserComponent } from "./user/user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductsComponent } from "./products/products.component";
import { OrdersNReviewComponent } from "./orders-n-review/orders-n-review.component";
import { ProfileComponent } from "./profile/profile.component";
import { ProductCategoryComponent } from "./product-category/product-category.component";
import { AdminChatComponent } from "./admin-chat/admin-chat.component";
import { PromotionComponent } from "./promotion/promotion.component";
import { WalletComponent } from "./wallet/wallet.component";

// Guard
import { ProductCategoryGuard } from "../../guards/product-category.guard";
import { ProductGuard } from "../../guards/product.guard";
import { UserGuard } from "../../guards/user.guard";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent }, // Vendor
  { path: "notification", component: NotificationsComponent }, // Vendor
  { path: "order-&-review", component: OrdersNReviewComponent }, // Vendor
  {
    path: "add-product",
    component: ProductsComponent,
    canDeactivate: [ProductGuard],
  }, // Vendor
  {
    path: "add-product/:id",
    component: ProductsComponent,
    canDeactivate: [ProductGuard]
  }, // Vendor
  { path: "product-list", component: ProductListComponent }, // Vendor
  {
    path: "add-user",
    component: UserComponent,
    canDeactivate: [UserGuard]

  }, // Admin
  { path: "user-list", component: UserListComponent }, // Admin
  { path: "settings", component: UserComponent }, // Vendor
  { path: "profile", component: ProfileComponent }, // Vendor

  {
    path: "product-category",
    component: ProductCategoryComponent,
    canDeactivate: [ProductCategoryGuard],
  }, // Vendor
  { path: "chat", component: AdminChatComponent }, // Admin
  { path: "promotion", component: PromotionComponent }, // Admin
  { path: "wallet", component: WalletComponent }, // vendor
  { path: ":id/product-list", component: ProductListComponent }, // Vendor
  { path: "", redirectTo: "dashboard", pathMatch: "full" }, // Vendor
  { path: "**", redirectTo: "dashboard", pathMatch: "full" }, // Vendor
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
