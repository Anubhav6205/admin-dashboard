import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as feather from 'feather-icons';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';
import { LoginComponent } from './routes/login/login.component';
import { RegisterComponent } from './routes/register/register.component';
import { HomeComponent } from './routes/home/home.component';

import { PagenotfoundComponent } from './routes/pagenotfound/pagenotfound.component';
import { UserComponent } from './routes/users/user/user.component';
import { ProductsComponent } from './routes/products/product/products.component';
import { MarketComponent } from './routes/market/market.component';
import { CartComponent } from './routes/cart/cart.component';
import { UsersCreateComponent } from './routes/users/users-create/users-create.component';
import { UsersEditComponent } from './routes/users/users-edit/users-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersViewComponent } from './routes/users/users-view/users-view.component';
import { ProductsCreateComponent } from './routes/products/products-create/products-create.component';
import { ProductsEditComponent } from './routes/products/products-edit/products-edit.component';
import { ProductsViewComponent } from './routes/products/products-view/products-view.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    CardComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,

    PagenotfoundComponent,
     UserComponent,
     ProductsComponent,
     MarketComponent,
     CartComponent,
     UsersCreateComponent,
     UsersEditComponent,
     UsersViewComponent,
     ProductsCreateComponent,
     ProductsViewComponent,
     ProductsEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    ReactiveFormsModule
    // RouterModule.forRoot([
    //   {path: '', component: HomeComponent},
    //   {path: 'user', component: ProfileComponent},
    //   {path: 'login', component: LoginComponent},
    //   {path: 'register', component: RegisterComponent},
    // ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  ngAfterViewInit() {
    feather.replace();
  }
}
