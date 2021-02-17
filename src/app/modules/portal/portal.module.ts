import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PortalRoutingModule } from './portal-routing.module';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersNReviewComponent } from './orders-n-review/orders-n-review.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfileComponent } from './profile/profile.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user.service';
import { OrderService } from '../../services/order.service';
import { ProductService } from '../../services/product.service';
import { ProductCategoryService } from '../../services/product-category.service';


@NgModule({
  declarations: [
    DashboardComponent,
    NotificationsComponent,
    OrdersNReviewComponent,
    ProductListComponent,
    ProductsComponent,
    UserComponent,
    UserListComponent,
    ProfileComponent,
    OrdersNReviewComponent,
    ProductCategoryComponent,
  ],
  imports: [
    CommonModule,
    PortalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers:[
    OrderService, ProductService, ProductCategoryService, UserService
  ]
})
export class PortalModule { }