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
var todos_service_1 = require("../../services/todos/todos.service");
var TodosComponent = (function () {
    function TodosComponent(todosService) {
        this.todosService = todosService;
        this.todos = todosService.getTodos();
    }
    TodosComponent.prototype.addNewTodo = function () {
        if (!this.newTodo || this.newTodo.length < 3) {
            this.errorMessage = "Todo should be atleast three characters";
            this.successMessage = '';
        }
        else {
            this.todosService.addNewTodo(this.newTodo);
            this.errorMessage = '';
            this.successMessage = this.newTodo + " added successfully";
            this.newTodo = '';
        }
    };
    TodosComponent.prototype.removeTodo = function (a) {
        console.log(a);
        this.todosService.removeTodo(a);
        this.successMessage = a + ' deleted successfully';
    };
    TodosComponent.prototype.resetTodos = function () {
        this.todosService.resetTodos();
        this.successMessage = 'All todos reset';
    };
    return TodosComponent;
}());
TodosComponent = __decorate([
    core_1.Component({
        selector: 'todos',
        template: "\n    <div *ngIf=\"todos\">\n      Some todos are found\n    </div>\n    <div *ngIf=\"!todos\">\n      No todos found\n    </div>\n    <div [ngSwitch]=\"name\">\n      <div *ngSwitchCase=\"'Puneet'\">\n        {{name}}\n      </div>\n      <div *ngSwitchDefault>\n        Default case\n      </div>\n    </div>\n    <div>\n      <div>\n        <div *ngIf=\"errorMessage\">\n          <div class=\"alert alert-danger\">{{errorMessage}}</div>\n        </div>\n        <div *ngIf=\"successMessage\">\n          <div class=\"alert alert-success\">{{successMessage}}</div>\n        </div>\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newTodo\" (keyup.enter)=\"addNewTodo()\"/>\n        <br/>\n      </div>\n      <ul class=\"list-group\">\n        <li *ngFor=\"let todo of todos; let i = index\" class=\"list-group-item\">\n          <a href=\"#\" (dblclick)=\"removeTodo(todo)\">{{i+1}}-{{todo}}</a>\n        </li>\n      </ul>\n    </div>\n    <button class = \"btn btn-default\" (click)=\"resetTodos()\">Reset</button>\n  ",
        providers: [todos_service_1.TodosService]
    }),
    __metadata("design:paramtypes", [todos_service_1.TodosService])
], TodosComponent);
exports.TodosComponent = TodosComponent;
//# sourceMappingURL=todos.component.js.map