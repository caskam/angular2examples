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
var group_service_1 = require('../services/group.service');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var EditGroupComponent = (function () {
    function EditGroupComponent(_route, _groupService, _router, _fb) {
        this._route = _route;
        this._groupService = _groupService;
        this._router = _router;
        this._fb = _fb;
        this.name = new forms_1.FormControl('', forms_1.Validators.compose([
            forms_1.Validators.required,
            forms_1.Validators.minLength(3)
        ]));
        this.form = _fb.group({
            "name": this.name
        });
    }
    EditGroupComponent.prototype.editGroup = function (id) {
        this._groupService.editGroup(this.loadedGroup);
        this._router.navigateByUrl('groups');
    };
    EditGroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSubscription = this._route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.loadedGroup = this._groupService.getGroup(this.id);
    };
    EditGroupComponent.prototype.ngOnDestroy = function () {
        this.paramsSubscription.unsubscribe();
    };
    EditGroupComponent = __decorate([
        core_1.Component({
            selector: 'edit-group',
            template: "\n  <div class=\"w3-card-4\">\n    <div class=\"w3-container w3-green\">\n      <h2>Edit Group</h2>\n    </div>\n    <form [formGroup]=\"form\" class=\"w3-padding-16\">\n      <div class=\"form-group\">\n        <label class=\"w3-label\">Group Name</label>\n        <input class=\"w3-input\" type=\"text\" [(ngModel)]=\"loadedGroup.name\" formControlName=\"name\">\n      </div>\n      <div class=\"form-group\">\n      <button (click)=\"editGroup(loadedGroup.id)\" [disabled]=\"!form.valid\" class=\"w3-btn w3-light-grey\">Sumbit data</button>\n      </div>\n    </form>\n  </div>\n  ",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, group_service_1.GroupService, router_1.Router, forms_1.FormBuilder])
    ], EditGroupComponent);
    return EditGroupComponent;
}());
exports.EditGroupComponent = EditGroupComponent;
//# sourceMappingURL=edit-group.component.js.map