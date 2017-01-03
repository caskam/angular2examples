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
var posts_service_1 = require('../../services/posts/posts.service');
var PostsComponent = (function () {
    function PostsComponent(_postsService) {
        this._postsService = _postsService;
        this.isLoading = true;
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._postsService.getPosts()
            .subscribe(function (posts) {
            console.log(posts);
            _this.posts = posts;
            _this.isLoading = false;
        });
    };
    PostsComponent.prototype.ngDoCheck = function () {
        console.log('Do Check has Run');
    };
    PostsComponent.prototype.clickMe = function () {
        console.log("Button clicked");
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            template: "\n    <div *ngIf=\"isLoading\">\n    <i class=\"fa fa-spinner fa-spin fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div *ngIf=\"!isLoading\">\n      <div *ngFor=\"let post of posts, let i = index\">\n        <h3>{{post.title}}</h3>\n        <p>{{post.body}}</p>\n        <hr/>\n      </div>\n    </div>\n    <!--button class=\"btn btn-default\" (click)=\"clickMe()\">Click</button-->\n  ",
            providers: [posts_service_1.PostsService]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map