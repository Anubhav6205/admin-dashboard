"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersEditComponent = void 0;
var core_1 = require("@angular/core");
var UsersEditComponent = /** @class */ (function () {
    function UsersEditComponent(router, userService, fb, routerNav) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.fb = fb;
        this.routerNav = routerNav;
        this.currentIndex = -1;
        this.modalHide = true;
        this.router.params.subscribe(function (params) {
            _this.currentIndex = parseInt(params['id']);
            _this.currentUser = _this.userService.usersData[_this.currentIndex];
            console.log(_this.currentUser);
            _this.userFormData = _this.fb.group({
                name: _this.fb.control(_this.currentUser.name),
                email: _this.fb.control(_this.currentUser.email),
                contact: _this.fb.control(_this.currentUser.contact),
                address: _this.fb.control(_this.currentUser.address)
            });
        });
    }
    UsersEditComponent.prototype.ngOnInit = function () {
    };
    UsersEditComponent.prototype.userUpdate = function () {
        var _this = this;
        var userData = {
            name: this.userFormData.value.name,
            email: this.userFormData.value.email,
            contact: this.userFormData.value.contact,
            address: this.userFormData.value.address
        };
        this.userService.userUpdate(this.currentIndex, userData);
        this.modalHide = false;
        setTimeout(function () {
            _this.modalHide = true;
            _this.routerNav.navigate(['/user']);
        }, 2000);
    };
    UsersEditComponent = __decorate([
        core_1.Component({
            selector: 'app-users-edit',
            templateUrl: './users-edit.component.html',
            styleUrls: ['./users-edit.component.css']
        })
    ], UsersEditComponent);
    return UsersEditComponent;
}());
exports.UsersEditComponent = UsersEditComponent;
