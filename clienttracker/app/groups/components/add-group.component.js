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
var group_service_1 = require('../services/group.service');
var AddGroupComponent = (function () {
    function AddGroupComponent(_fb, _groupService) {
        this._fb = _fb;
        this._groupService = _groupService;
        this.name = new forms_1.FormControl("", forms_1.Validators.compose([
            forms_1.Validators.required,
            forms_1.Validators.minLength(3)
        ]));
        this.form = _fb.group({
            "name": this.name
        });
    }
    AddGroupComponent.prototype.addNewGroup = function () {
        console.log(this.groupName);
        // this._groupServuce.addGroup(this.groupName);
    };
    AddGroupComponent = __decorate([
        core_1.Component({
            selector: 'add-group',
            template: "\n    <div class=\"w3-card-4\">\n      <div class=\"container w3-green\">\n        <h2>Add Group</h2>\n      </div>\n      <div>\n        <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <label class=\"w3-label\">Group Name</label>\n            <input type=\"text\" class=\"w3-text\" [(ngModel)]=\"groupName\" formControlName=\"name\">\n          </div>\n          <div class=\"form-group\">\n            <button [disabled]=\"!form.valid\" type=\"submit\" class=\"w3-btn w3-light-grey\">Submit Data</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  ",
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, group_service_1.GroupService])
    ], AddGroupComponent);
    return AddGroupComponent;
}());
exports.AddGroupComponent = AddGroupComponent;
//# sourceMappingURL=add-group.component.js.map