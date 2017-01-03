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
var core_1 = require("@angular/core");
var body_service_1 = require("../body/body.service");
var engine_service_1 = require("../engine/engine.service");
var tires_service_1 = require("../tires/tires.service");
var Car = (function () {
    function Car(body, engine, tires) {
        this.body = body;
        this.engine = engine;
        this.tires = tires;
    }
    return Car;
}());
Car = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [body_service_1.Body,
        engine_service_1.Engine,
        tires_service_1.Tires])
], Car);
exports.Car = Car;
//# sourceMappingURL=car.service.js.map