// Modules
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { AppRoutingModule } from "./app-routing.module";
//Components
import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { ChatbootComponent } from './layout/chatboot/chatboot.component';
//Services
import { OrderService } from "./services/order.service";
import { ProductService } from "./services/product.service";
import { ProductCategoryService } from "./services/product-category.service";
import { UserService } from "./services/user.service";
import { ContactsComponent } from './layout/contacts/contacts.component';
import { ContactService } from "./services/contact.service";
import { ChatService } from "./services/chat.service";
import { ContactsChatingService } from "./services/contacts-chating.service";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
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
    ChatbootComponent,
    ContactsComponent,
  ],
  providers: [
    OrderService, ProductService, ProductCategoryService, UserService, ContactService, ChatService,
    ContactsChatingService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
