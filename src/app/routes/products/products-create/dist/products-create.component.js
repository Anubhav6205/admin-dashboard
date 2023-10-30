"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductsCreateComponent = void 0;
var core_1 = require("@angular/core");
var ProductsCreateComponent = /** @class */ (function () {
    function ProductsCreateComponent(fb, productService, router) {
        this.fb = fb;
        this.productService = productService;
        this.router = router;
        this.usersData = [];
        this.modalHide = true;
        this.userFormData = this.fb.group({
            name: this.fb.control(''),
            description: this.fb.control('')
        });
    }
    ProductsCreateComponent.prototype.ngOnInit = function () { };
    ProductsCreateComponent.prototype.addProduct = function () {
        var _this = this;
        //square brackets in string as it will parse to JSON
        var currentProduct = {
            name: this.userFormData.value.name,
            description: this.userFormData.value.description
        };
        this.productService.addProduct(currentProduct);
        this.modalHide = false;
        setTimeout(function () {
            _this.modalHide = true;
            _this.router.navigate(['/products']);
        }, 2000);
    };
    ProductsCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-products-create',
            templateUrl: './products-create.component.html',
            styleUrls: ['./products-create.component.css']
        })
    ], ProductsCreateComponent);
    return ProductsCreateComponent;
}());
exports.ProductsCreateComponent = ProductsCreateComponent;
