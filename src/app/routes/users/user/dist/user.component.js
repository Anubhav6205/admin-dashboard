"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserComponent = void 0;
var core_1 = require("@angular/core");
var UserComponent = /** @class */ (function () {
    function UserComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.usersData = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        console.log('getitng from user component ');
        this.usersData = this.userService.getUserData();
    };
    UserComponent.prototype.userDelete = function (index) {
        this.userService.userDelete(index);
        this.usersData = this.userService.getUserData();
    };
    UserComponent.prototype.userEdit = function (index) {
        console.log(index);
        this.router.navigate(['/users/edit', index]);
    };
    UserComponent.prototype.userView = function (index) {
        this.router.navigate(['/users', index]);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        })
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
