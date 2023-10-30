"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserServiceService = void 0;
var core_1 = require("@angular/core");
var UserServiceService = /** @class */ (function () {
    function UserServiceService() {
        this.usersData = [];
        this.usersData = JSON.parse(localStorage.getItem('users') || '[]');
    }
    UserServiceService.prototype.ngOnInit = function () { };
    UserServiceService.prototype.getUserData = function () {
        console.log('getting from services');
        return this.usersData;
    };
    UserServiceService.prototype.addUser = function (userData) {
        this.usersData = JSON.parse(localStorage.getItem('users') || '[]');
        this.usersData.push(userData);
        localStorage.setItem('users', JSON.stringify(this.usersData));
    };
    UserServiceService.prototype.userDelete = function (index) {
        console.log('delete in services');
        console.log(index);
        this.usersData = JSON.parse(localStorage.getItem('users') || '[]');
        console.log(this.usersData);
        this.usersData.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(this.usersData));
        console.log(this.usersData);
    };
    UserServiceService.prototype.userUpdate = function (index, userData) {
        this.usersData = JSON.parse(localStorage.getItem('users') || '[]');
        console.log(this.usersData);
        this.usersData[index] = userData;
        localStorage.setItem('users', JSON.stringify(this.usersData));
        console.log('updated');
    };
    UserServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserServiceService);
    return UserServiceService;
}());
exports.UserServiceService = UserServiceService;
