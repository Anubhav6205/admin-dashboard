"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsComponent = void 0;
var core_1 = require("@angular/core");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(router, productService) {
        this.router = router;
        this.productService = productService;
        this.productsData = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
        console.log('getitng from product component ');
        this.productsData = this.productService.getProductData();
    };
    ProductsComponent.prototype.productDelete = function (index) {
        this.productService.productDelete(index);
        this.productsData = this.productService.getProductData();
    };
    ProductsComponent.prototype.productEdit = function (index) {
        // console.log(index);
        // this.router.navigate(['/products/edit', index]);
    };
    ProductsComponent.prototype.productView = function (index) {
        this.router.navigate(['/products', index]);
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
