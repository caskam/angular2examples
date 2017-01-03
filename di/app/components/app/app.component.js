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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var car_service_1 = require("../../services/car/car.service");
var body_service_1 = require("../../services/body/body.service");
var engine_service_1 = require("../../services/engine/engine.service");
var tires_service_1 = require("../../services/tires/tires.service");
var AppComponent = (function () {
    function AppComponent(c) {
        this.color = c.body.color;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <h2 [ngStyle]=\"{'background-color': color}\">Color: {{color}}</h2>\n\n  ",
        providers: [car_service_1.Car, engine_service_1.Engine, tires_service_1.Tires, body_service_1.Body]
    }),
    __param(0, core_2.Inject(car_service_1.Car)),
    __metadata("design:paramtypes", [car_service_1.Car])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map