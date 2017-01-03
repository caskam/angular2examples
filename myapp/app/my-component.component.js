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
var MyComponent = (function () {
    function MyComponent() {
        this.myComponentName = "Test";
        this.imageUrl = "";
        this.isActive = false;
        this.clickMessage = "";
        this.myComponentName = "Puneet Sachdev";
        this.imageUrl = "http://lorempixel.com/400/200";
        this.isActive = true;
    }
    MyComponent.prototype.changeMessage = function () {
        this.clickMessage = "The button is clicked";
    };
    MyComponent.prototype.setUpperCase = function (e) {
        this.myComponentName = e.toUpperCase();
    };
    return MyComponent;
}());
MyComponent = __decorate([
    core_1.Component({
        selector: 'my-component',
        template: "\n    <h3>Hello World {{myComponentName}}</h3>\n    <img [src] = \"imageUrl\"/>\n    <img bind-src = \"imageUrl\"/>\n    <button [class.isActive] = \"isActive\">Button - Class Binding</button>\n    <button [style.background-color] = \"isActive ? 'green':'red'\">Button - Style Binding</button>\n    <p><button (click) = \"changeMessage()\">Button3 - Event Binding</button>\n    <h3>{{clickMessage}}</h3>\n    <input [(ngModel)]=\"myComponentName\" (ngModelChange)=\"setUpperCase($event)\"/>\n    "
    }),
    __metadata("design:paramtypes", [])
], MyComponent);
exports.MyComponent = MyComponent;
//# sourceMappingURL=my-component.component.js.map