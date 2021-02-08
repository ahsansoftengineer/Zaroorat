import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { AdminLayoutComponent } from "./admin-layout.component";


import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { ProductsComponent } from "../../pages/products/products.component";
import { ProductListComponent } from "../../pages/product-list/product-list.component";
import { OrdersNReviewComponent } from "../../pages/orders-n-review/orders-n-review.component";
import { VendorComponent } from "../../pages/vendor/vendor.component";
import { VendorListComponent } from "../../pages/vendor-list/vendor-list.component";
import { ComponentsModule } from "../../components/components.module";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ComponentsModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ],
  declarations: [
    AdminLayoutComponent,
    DashboardComponent,
    UserComponent,
    TablesComponent,
    // IconsComponent,
    TypographyComponent,
    ProductsComponent,
    ProductListComponent,
    NotificationsComponent,
    OrdersNReviewComponent,
    VendorComponent,
    VendorListComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
