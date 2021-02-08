import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("../layouts/admin-layout/admin-layout.module").then(
        (m) => m.AdminLayoutModule
      ),
  },
  {
    path: "vendor",
    loadChildren: () =>
      import("../layouts/vendor-layout/vendor-layout.module").then(
        (m) => m.VendorLayoutModule
      ),
  },
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent]
})
export class ComponentsModule {}
