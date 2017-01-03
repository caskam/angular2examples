import { Component } from '@angular/core';
import { TodosService } from '../../services/todos/todos.service';

@Component({
  selector: 'todos',
  template: `
    <div *ngIf="todos">
      Some todos are found
    </div>
    <div *ngIf="!todos">
      No todos found
    </div>
    <div [ngSwitch]="name">
      <div *ngSwitchCase="'Puneet'">
        {{name}}
      </div>
      <div *ngSwitchDefault>
        Default case
      </div>
    </div>
    <div>
      <div>
        <div *ngIf="errorMessage">
          <div class="alert alert-danger">{{errorMessage}}</div>
        </div>
        <div *ngIf="successMessage">
          <div class="alert alert-success">{{successMessage}}</div>
        </div>
        <input type="text" class="form-control" [(ngModel)]="newTodo" (keyup.enter)="addNewTodo()"/>
        <br/>
      </div>
      <ul class="list-group">
        <li *ngFor="let todo of todos; let i = index" class="list-group-item">
          <a href="#" (dblclick)="removeTodo(todo)">{{i+1}}-{{todo}}</a>
        </li>
      </ul>
    </div>
    <button class = "btn btn-default" (click)="resetTodos()">Reset</button>
  `,
  providers: [TodosService]
})
export class TodosComponent  {
  todos: string[];
  name: string;
  newTodo: string;
  errorMessage: string;
  successMessage: string;

  constructor(private todosService: TodosService){
    this.todos = todosService.getTodos();
  }

  addNewTodo(){
    if (!this.newTodo || this.newTodo.length < 3){
        this.errorMessage = "Todo should be atleast three characters";
        this.successMessage = '';
    }
    else{
      this.todosService.addNewTodo(this.newTodo);
      this.errorMessage = '';
      this.successMessage = this.newTodo + " added successfully";
      this.newTodo = '';
    }
  }

  removeTodo(a: string) {
    console.log(a);
    this.todosService.removeTodo(a);
    this.successMessage = a + ' deleted successfully';
  }

  resetTodos(){
    this.todosService.resetTodos();
    this.successMessage = 'All todos reset';
  }
}
