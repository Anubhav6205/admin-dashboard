"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var feather = require("feather-icons");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var sidebar_component_1 = require("./sidebar/sidebar.component");
var topbar_component_1 = require("./topbar/topbar.component");
var card_component_1 = require("./card/card.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var ng2_charts_1 = require("ng2-charts");
var login_component_1 = require("./routes/login/login.component");
var register_component_1 = require("./routes/register/register.component");
var home_component_1 = require("./routes/home/home.component");
var pagenotfound_component_1 = require("./routes/pagenotfound/pagenotfound.component");
var user_component_1 = require("./routes/users/user/user.component");
var products_component_1 = require("./routes/products/product/products.component");
var market_component_1 = require("./routes/market/market.component");
var cart_component_1 = require("./routes/cart/cart.component");
var users_create_component_1 = require("./routes/users/users-create/users-create.component");
var users_edit_component_1 = require("./routes/users/users-edit/users-edit.component");
var forms_1 = require("@angular/forms");
var users_view_component_1 = require("./routes/users/users-view/users-view.component");
var products_create_component_1 = require("./routes/products/products-create/products-create.component");
var products_edit_component_1 = require("./routes/products/products-edit/products-edit.component");
var products_view_component_1 = require("./routes/products/products-view/products-view.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.prototype.ngAfterViewInit = function () {
        feather.replace();
    };
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                sidebar_component_1.SidebarComponent,
                topbar_component_1.TopbarComponent,
                card_component_1.CardComponent,
                dashboard_component_1.DashboardComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                home_component_1.HomeComponent,
                pagenotfound_component_1.PagenotfoundComponent,
                user_component_1.UserComponent,
                products_component_1.ProductsComponent,
                market_component_1.MarketComponent,
                cart_component_1.CartComponent,
                users_create_component_1.UsersCreateComponent,
                users_edit_component_1.UsersEditComponent,
                users_view_component_1.UsersViewComponent,
                products_create_component_1.ProductsCreateComponent,
                products_view_component_1.ProductsViewComponent,
                products_edit_component_1.ProductsEditComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng2_charts_1.NgChartsModule,
                forms_1.ReactiveFormsModule
                // RouterModule.forRoot([
                //   {path: '', component: HomeComponent},
                //   {path: 'user', component: ProfileComponent},
                //   {path: 'login', component: LoginComponent},
                //   {path: 'register', component: RegisterComponent},
                // ]),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
