"use strict";
var TodosService = (function () {
    function TodosService() {
        this.todos = ['Apply for leave', 'Create Framework'];
    }
    TodosService.prototype.getTodos = function () {
        return this.todos;
    };
    TodosService.prototype.addNewTodo = function (newtodo) {
        this.todos.push(newtodo);
    };
    TodosService.prototype.removeTodo = function (todoTobeRemoved) {
        this.todos.splice(this.todos.indexOf(todoTobeRemoved), 1);
    };
    TodosService.prototype.resetTodos = function () {
        this.todos.length = 0;
    };
    return TodosService;
}());
exports.TodosService = TodosService;
//# sourceMappingURL=todos.service.js.map