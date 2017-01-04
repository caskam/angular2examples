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
var ClientListComponent = (function () {
    function ClientListComponent(_clientService, _router) {
        this._clientService = _clientService;
        this._router = _router;
        this.clients = [];
    }
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscriptionClient = this._clientService.getClients().subscribe(function (returnedClient) {
            _this.clients.push(returnedClient);
        }, function (error) {
            _this.subscriptionClient.unsubscribe();
        });
    };
    ClientListComponent.prototype.ngOnDestroy = function () {
        this.subscriptionClient.unsubscribe();
    };
    ClientListComponent.prototype.deleteClient = function (id) {
        var _this = this;
        this.clients.forEach(function (client, index) {
            if (client.id == id) {
                _this.clients.splice(index, 1);
            }
        });
        this._clientService.deleteClient(id);
    };
    ClientListComponent = __decorate([
        core_1.Component({
            selector: 'client-list',
            template: "\n    <h2>Clients</h2>\n    <form>\n      <input type=\"text\" class=\"w3-input\" [(ngModel)]=\"searchText\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Search clients...\">\n    </form>\n    <div *ngIf=\"clients\">\n    <table *ngIf=\"clients\" class=\"w3-table w3-bordered w3-striped\">\n      <tr>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Phone</th>\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let client of clients | filter:searchText\">\n        <td><a [routerLink]=\"['/clients/details', client.id]\">{{client.firstName}} {{client.lastName}}</a></td>\n        <td>{{client.email}}</td>\n        <td>{{client.phone}}</td>\n        <td>\n          <a [routerLink]=\"['/clients/edit', client.id]\" class=\"w3-btn w3-green\">Edit</a>\n          <button (click)=\"deleteClient(client.id)\" class=\"w3-btn w3-red\">Delete</button>\n        </td>\n      </tr>\n    </table>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [client_service_1.ClientService, router_1.Router])
    ], ClientListComponent);
    return ClientListComponent;
}());
exports.ClientListComponent = ClientListComponent;
//# sourceMappingURL=client-list.component.js.map