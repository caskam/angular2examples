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
var forms_1 = require("@angular/forms");
var AppComponent = (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.username = new forms_1.FormControl("psachdev", forms_1.Validators.compose([
            forms_1.Validators.required,
            forms_1.Validators.minLength(3)
        ]));
        this.email = new forms_1.FormControl("puneet.sachdev@gmail.com", forms_1.Validators.compose([
            forms_1.Validators.required,
            forms_1.Validators.pattern(/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm)
        ]));
        this.form = fb.group({
            "username": this.username,
            "email": this.email
        });
    }
    AppComponent.prototype.onSubmitModelBased = function () {
        console.log("model-based form submitted");
        console.log(this.form);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n  <div class=\"container\">\n    <h1>Model Driven Form Example</h1>\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n            <label>Username:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"username\">\n            <div *ngIf=\"form.controls.username.errors?.required\" class=\"alert alert-danger\">Username is required</div>\n            <div *ngIf=\"form.controls.username.errors?.minlength\" class=\"alert alert-danger\">Username needs to be atleast 3 characters long</div>\n        </div>\n        <div class=\"form-group\">\n            <label>Email:</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\">\n            <div *ngIf=\"form.controls.email.errors?.required\" class=\"alert alert-danger\">Email is required</div>\n            <div *ngIf=\"form.controls.email.errors?.pattern\" class=\"alert alert-danger\">Email is not of correct format</div>\n        </div>\n        <p>\n        <button class=\"btn btn-default\" [disabled]=\"!form.valid\" type=\"submit\">Submit</button>\n        </p>\n    </form>\n  </div>\n  ",
        styles: ["\n    .ng-valid[required]{\n      border: 1px solid #42A948; /* green */\n    }\n    .ng-invalid{\n      border: 1px solid #a94442; /* red */\n    }\n  "]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map