import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminLayoutRoutes } from "./admin-layout.routing";


import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ProductsComponent } from "../../pages/products/products.component";
import { ProductListComponent } from "../../pages/product-list/product-list.component";
import { OrdersNReviewComponent } from "../../pages/orders-n-review/orders-n-review.component";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    // IconsComponent,
    TypographyComponent,
    ProductsComponent,
    ProductListComponent,
    NotificationsComponent,
    OrdersNReviewComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
