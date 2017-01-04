"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var group_service_1 = require('../services/group.service');
var GroupListComponent = (function () {
    function GroupListComponent(_groupService) {
        this._groupService = _groupService;
        this.groups = [];
    }
    GroupListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._groupService.getGroups().subscribe(function (returnedGroup) {
            _this.groups.push(returnedGroup);
            console.log('Returned Log = ' + returnedGroup);
        });
    };
    GroupListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    GroupListComponent = __decorate([
        core_1.Component({
            selector: 'group-list',
            template: "\n    <h2>Group List</h2>\n    <div *ngIf=\"groups\">\n      <table class=\"w3-table w3-bordered w3-striped\">\n      <tr>\n        <th>ID</th>\n        <th>Name</th>\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let group of groups, let i = index\">\n        <td>{{group.id}}</td>\n        <td>{{group.name}}</td>\n        <td>\n          <a [routerLink]=\"['groups/edit', group.id]\" class=\"w3-btn w3-green\">Edit\"</a>\n          <button (click)=\"deleteGroup()\" class=\"w3-btn w3-red\">Delete</button>\n        </td>\n      </tr>\n      </table>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [group_service_1.GroupService])
    ], GroupListComponent);
    return GroupListComponent;
}());
exports.GroupListComponent = GroupListComponent;
//# sourceMappingURL=group-list.component.js.map