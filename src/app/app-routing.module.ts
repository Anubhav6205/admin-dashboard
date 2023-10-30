import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './routes/register/register.component';
import { LoginComponent } from './routes/login/login.component';
import { PagenotfoundComponent } from './routes/pagenotfound/pagenotfound.component';
import { UserComponent } from './routes/users/user/user.component';
import { ProductsComponent } from './routes/products/product/products.component';
import { MarketComponent } from './routes/market/market.component';
import { CartComponent } from './routes/cart/cart.component';
import { UsersCreateComponent } from './routes/users/users-create/users-create.component';
import { UsersEditComponent } from './routes/users/users-edit/users-edit.component';
import { UsersViewComponent } from './routes/users/users-view/users-view.component';
import { ProductsCreateComponent } from './routes/products/products-create/products-create.component';
import { ProductsViewComponent } from './routes/products/products-view/products-view.component';
import { ProductsEditComponent } from './routes/products/products-edit/products-edit.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'user',
        component: UserComponent,
      },
      {
        path: 'users/create',
        component: UsersCreateComponent,
      },
      {
        path:'users/:id',
        component:UsersViewComponent,
      },
      {
        path: 'users/edit/:id',
        component: UsersEditComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,

      },
      {
        path:'products/create',
        component:ProductsCreateComponent

      },
      {
        path:'products/edit/:id',
        component:ProductsEditComponent

      },
      {
        path:'products/:id',
        component:ProductsViewComponent
      },
      {
        path: 'market',
        component: MarketComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
    ],
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
