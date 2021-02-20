import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { OrdersNReviewComponent } from './orders-n-review/orders-n-review.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { AdminChatComponent } from './admin-chat/admin-chat.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent }, // Vendor
  { path: 'notifications', component: NotificationsComponent }, // Vendor
  { path: 'order-&-review', component: OrdersNReviewComponent }, // Vendor
  { path: 'add-product', component: ProductsComponent }, // Vendor
  { path: 'product-list', component: ProductListComponent }, // Vendor
  { path: 'add-user', component: UserComponent }, // Admin
  { path: 'user-list', component: UserListComponent }, // Admin
  { path: 'settings', component: UserComponent }, // Vendor
  { path: 'profile', component: ProfileComponent }, // Vendor
  { path: 'product-category', component: ProductCategoryComponent }, // Vendor
  { path: 'chat', component: AdminChatComponent }, // Admin
  { path: ':id/product-list', component: ProductListComponent }, // Vendor
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Vendor
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },// Vendor
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {}
