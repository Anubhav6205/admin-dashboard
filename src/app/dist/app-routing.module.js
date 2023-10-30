"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var home_component_1 = require("./routes/home/home.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var register_component_1 = require("./routes/register/register.component");
var login_component_1 = require("./routes/login/login.component");
var pagenotfound_component_1 = require("./routes/pagenotfound/pagenotfound.component");
var user_component_1 = require("./routes/users/user/user.component");
var products_component_1 = require("./routes/products/product/products.component");
var market_component_1 = require("./routes/market/market.component");
var cart_component_1 = require("./routes/cart/cart.component");
var users_create_component_1 = require("./routes/users/users-create/users-create.component");
var users_edit_component_1 = require("./routes/users/users-edit/users-edit.component");
var users_view_component_1 = require("./routes/users/users-view/users-view.component");
var products_create_component_1 = require("./routes/products/products-create/products-create.component");
var products_view_component_1 = require("./routes/products/products-view/products-view.component");
var products_edit_component_1 = require("./routes/products/products-edit/products-edit.component");
var routes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        children: [
            {
                path: '',
                component: dashboard_component_1.DashboardComponent
            },
            {
                path: 'user',
                component: user_component_1.UserComponent
            },
            {
                path: 'users/create',
                component: users_create_component_1.UsersCreateComponent
            },
            {
                path: 'users/:id',
                component: users_view_component_1.UsersViewComponent
            },
            {
                path: 'users/edit/:id',
                component: users_edit_component_1.UsersEditComponent
            },
            {
                path: 'products',
                component: products_component_1.ProductsComponent
            },
            {
                path: 'products/create',
                component: products_create_component_1.ProductsCreateComponent
            },
            {
                path: 'products/edit/:id',
                component: products_edit_component_1.ProductsEditComponent
            },
            {
                path: 'products/:id',
                component: products_view_component_1.ProductsViewComponent
            },
            {
                path: 'market',
                component: market_component_1.MarketComponent
            },
            {
                path: 'cart',
                component: cart_component_1.CartComponent
            },
        ]
    },
    {
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: '**',
        component: pagenotfound_component_1.PagenotfoundComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
