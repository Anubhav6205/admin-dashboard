"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductServiceService = void 0;
var core_1 = require("@angular/core");
var ProductServiceService = /** @class */ (function () {
    function ProductServiceService() {
        this.productsData = [];
        this.productsData = JSON.parse(localStorage.getItem('products') || '[]');
    }
    ProductServiceService.prototype.ngOnInit = function () { };
    ProductServiceService.prototype.getProductData = function () {
        console.log('getting from services');
        return this.productsData;
    };
    ProductServiceService.prototype.addProduct = function (currentProduct) {
        this.productsData = JSON.parse(localStorage.getItem('products') || '[]');
        this.productsData.push(currentProduct);
        localStorage.setItem('products', JSON.stringify(this.productsData));
    };
    ProductServiceService.prototype.productDelete = function (index) {
        console.log('delete in services');
        console.log(index);
        this.productsData = JSON.parse(localStorage.getItem('products') || '[]');
        console.log(this.productsData);
        this.productsData.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(this.productsData));
        console.log(this.productsData);
    };
    ProductServiceService.prototype.productUpdate = function (index, productData) {
        // this.productsData = JSON.parse(localStorage.getItem('products') || '[]');
        // console.log(this.productsData);
        // this.productsData[index] = productData;
        // localStorage.setItem('products', JSON.stringify(this.productsData));
        // console.log('updated');
    };
    ProductServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductServiceService);
    return ProductServiceService;
}());
exports.ProductServiceService = ProductServiceService;
