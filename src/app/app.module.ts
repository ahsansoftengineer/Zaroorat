import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
