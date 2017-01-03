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
var client_service_1 = require('./clients/services/client.service');
var group_service_1 = require('./groups/services/group.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <ul class=\"w3-navbar w3-green\">\n      <li><a routerLink='' routerLinkActive='active'>Home</a></li>\n      <li><a routerLink='/clients' routerLinkActive='active'>Clients</a></li>\n      <li><a routerLink='/groups' routerLinkActive='active'>Groups</a></li>\n    </ul>\n    <div class=\"container w3-padding\">\n        <div class=\"w3-row\">\n          <div class=\"w3-col m4 l3\">\n            <h1 class=\"logo\"><span>Client</span>Tracker</h1>\n            <ul class=\"w3-ul w3-border\">\n              <li><a routerLink='/clients/add'>Add Client</a></li>\n              <li><a routerLink='/groups/add'>Add Group</a></li>\n            </ul>\n        </div>\n        <div class=\"w3-col m8 l9\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n    </div>\n  ",
            providers: [
                client_service_1.ClientService,
                group_service_1.GroupService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map