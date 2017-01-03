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
var Post_1 = require('../../model/Post');
var AppComponent = (function () {
    function AppComponent() {
        this.categories = ['Technology', 'Business', 'Entertainment'];
        this.model = new Post_1.Post(1, 'Post One', this.categories[0], 'This is the body', 'Puneet Sachdev');
        this.submitted = false;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n    <h1>Add Post</h1>\n    <form #f=\"ngForm\">\n      <div class=\"form-group\">\n        <label>Title</label>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model.title\" name=\"title\" required>\n        <div [hidden]=\"!f.controls.title?.errors\" class=\"alert alert-danger\">Title is required</div>\n      </div>\n      <div class=\"form-group\">\n        <label>Category</label>\n        <select class=\"form-control\" [(ngModel)]=\"model.category\" name=\"category\" required>\n        <option *ngFor=\"let cat of categories, let i = index\">{{cat}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Body</label>\n        <textarea class=\"form-control\" [(ngModel)]=\"model.body\" name=\"body\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label>Author</label>\n          <input typw=\"text\" class=\"form-control\" [(ngModel)]=\"model.author\" name=\"author\">\n      </div>\n      <button [disabled]=\"f.invalid\" type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n    </div>\n  ",
            styles: ["\n    .ng-valid[required]{\n      border: 1px solid #42A948; /* green */\n    }\n    .ng-invalid{\n      border: 1px solid #a94442; /* red */\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map