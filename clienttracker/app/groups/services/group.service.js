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
var Observable_1 = require('rxjs/Observable');
var group_1 = require('../model/group');
var GroupService = (function () {
    // private _groups: BehaviorSubject<Group[]>;
    // private groups: Group[];
    function GroupService() {
        this.groupDb = firebase.database().ref('/').child('groups');
        // this.groups = [];
        // this._groups = new BehaviorSubject([]);
    }
    GroupService.prototype.addGroup = function (newGroup) {
        this.groupDb.push({
            name: newGroup
        });
        return;
    };
    GroupService.prototype.getGroups = function () {
        var _this = this;
        return Observable_1.Observable.create(function (observer) {
            var listener = _this.groupDb.on('child_added', function (snapshot) {
                var groupread = new group_1.Group(snapshot.key, snapshot.val().name);
                observer.next(groupread);
            });
        });
    };
    GroupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GroupService);
    return GroupService;
}());
exports.GroupService = GroupService;
//# sourceMappingURL=group.service.js.map