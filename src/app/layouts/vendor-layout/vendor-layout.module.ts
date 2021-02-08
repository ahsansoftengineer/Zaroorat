
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { VendorLayoutComponent } from './vendor-layout.component';
import { VendorLayoutRoutes } from "./vendor-layout.routing";


@NgModule({
  declarations: [VendorLayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forChild(VendorLayoutRoutes),
  ]
})
export class VendorLayoutModule { }
