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
var client_service_1 = require('../services/client.service');
var router_1 = require('@angular/router');
var ClientDetailsComponent = (function () {
    function ClientDetailsComponent(_router, _clientService, _route) {
        this._router = _router;
        this._clientService = _clientService;
        this._route = _route;
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSubscription = this._route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.client = this._clientService.getClientDetails(this.id);
    };
    ClientDetailsComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    ClientDetailsComponent = __decorate([
        core_1.Component({
            selector: 'client-details',
            template: "\n  <div class=\"w3-row\">\n    <ul class=\"w3-ul w3-border\">\n      <li><h2>{{client.firstName}} {{client.lastName}} <a [routerLink]=\"['/clients/edit', client.id]\" class=\"w3-btn light-grey  w3-tiny\" href=\"#\">Edit</a></h2></li>\n      <li>Group: {{client.group}}</li>\n      <li>Email: {{client.email}}</li>\n      <li>Phone: {{client.phone}}</li>\n      <li>Street: {{client.address}}</li>\n      <li>City: {{client.city}}</li>\n      <li>Zipcode: {{client.zipcode}}</li>\n      </ul>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.Router, client_service_1.ClientService, router_1.ActivatedRoute])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());
exports.ClientDetailsComponent = ClientDetailsComponent;
//# sourceMappingURL=client-details.component.js.map