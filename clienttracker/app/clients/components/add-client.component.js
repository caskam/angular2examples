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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var client_service_1 = require('../services/client.service');
var AddClientComponent = (function () {
    function AddClientComponent(fb, _clientService, _router) {
        this.fb = fb;
        this._clientService = _clientService;
        this._router = _router;
        this.newClient = {};
        this.firstName = new forms_1.FormControl("", forms_1.Validators.compose([
            forms_1.Validators.required, forms_1.Validators.minLength(3)
        ]));
        this.email = new forms_1.FormControl("", forms_1.Validators.compose([
            forms_1.Validators.required,
            forms_1.Validators.pattern(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)
        ]));
        this.form = fb.group({
            "firstName": this.firstName,
            "email": this.email
        });
    }
    AddClientComponent.prototype.addClient = function () {
        this._clientService.addNewClient(this.newClient);
        this.newClient = {};
        this._router.navigateByUrl('clients');
    };
    AddClientComponent = __decorate([
        core_1.Component({
            selector: 'add-client',
            template: "\n  <div class=\"w3-card-4\">\n      <div class=\"w3-container w3-green\">\n        <h2>Add Client</h2>\n      </div>\n      <form [formGroup]=\"form\" class=\"w3-padding-16\">\n        <div class=\"form-group\">\n          <label class=\"w3-label\">First Name</label>\n          <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"newClient.firstName\" formControlName=\"firstName\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"w3-label\">Last Name</label>\n          <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"newClient.lastName\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"w3-label\">Group</label>\n          <select class=\"w3-select\" [(ngModel)]=\"newClient.group\" [ngModelOptions]=\"{standalone: true}\">\n            <option value=\"\" disabled selected>Choose your option</option>\n            <option *ngFor=\"let group of groups\" [value]=\"group.name\">{{group.name}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n        <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"newClient.email\" formControlName=\"email\">\n          <label class=\"w3-label\">Email</label>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"w3-label\">Phone</label>\n          <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"newClient.phone\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"w3-label\">Address</label>\n          <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"newClient.address\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"w3-label\">City</label>\n          <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"newClient.city\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"w3-label\">State</label>\n          <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"newClient.state\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n          <label class=\"w3-label\">Zipcode</label>\n          <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"newClient.zipcode\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"form-group\">\n        <button (click)=\"addClient()\" [disabled]=\"!form.valid\" class=\"w3-btn w3-light-grey\">Sumbit data</button>\n        </div>\n      </form>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, client_service_1.ClientService, router_1.Router])
    ], AddClientComponent);
    return AddClientComponent;
}());
exports.AddClientComponent = AddClientComponent;
//# sourceMappingURL=add-client.component.js.map