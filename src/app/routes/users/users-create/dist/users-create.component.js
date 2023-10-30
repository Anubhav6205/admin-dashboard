"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersCreateComponent = void 0;
var core_1 = require("@angular/core");
var UsersCreateComponent = /** @class */ (function () {
    function UsersCreateComponent(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.usersData = [];
        this.modalHide = true;
        this.userFormData = this.fb.group({
            name: this.fb.control(''),
            email: this.fb.control(''),
            contact: this.fb.control(''),
            address: this.fb.control('')
        });
    }
    UsersCreateComponent.prototype.ngOnInit = function () { };
    UsersCreateComponent.prototype.addUser = function () {
        var _this = this;
        //square brackets in string as it will parse to JSON
        var userData = {
            name: this.userFormData.value.name,
            email: this.userFormData.value.email,
            contact: this.userFormData.value.contact,
            address: this.userFormData.value.address
        };
        this.userService.addUser(userData);
        this.modalHide = false;
        setTimeout(function () {
            _this.modalHide = true;
            _this.router.navigate(['/user']);
        }, 2000);
    };
    UsersCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-users-create',
            templateUrl: './users-create.component.html',
            styleUrls: ['./users-create.component.css']
        })
    ], UsersCreateComponent);
    return UsersCreateComponent;
}());
exports.UsersCreateComponent = UsersCreateComponent;
